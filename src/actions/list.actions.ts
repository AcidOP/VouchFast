/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use server';

import { db } from '@/drizzle/db';
import { list, testimonial } from '@/drizzle/schema';
import { and, count, desc, eq } from 'drizzle-orm';
import { unstable_cache, updateTag } from 'next/cache';
import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';

import { PLAN_LIMITS } from '@/lib/plan-limits';
import { validateListInput } from '@/lib/utils';

import type { NewListFormState } from '@/components/lists/create/new-list.client';
import type { ListFormState } from '@/components/lists/edit/edit-list.client';

const LIST_PATH = '/dashboard/lists';
const ERROR_LIST_NOT_FOUND = 'List not found';

/* -------------------------------------------------------------------------- */
/* Public */
/* -------------------------------------------------------------------------- */

export const getPublicListForSubmission = async (listId: string) => {
  const res = await db
    .select({
      id: list.id,
      name: list.name,
      message: list.message,
    })
    .from(list)
    .where(eq(list.id, listId))
    .limit(1);

  if (!res[0]) {
    return null;
  }

  return res[0];
};

/* -------------------------------------------------------------------------- */
/* Private / Dashboard */
/* -------------------------------------------------------------------------- */

export const getEditableListById = async (listId: string, userId: string) => {
  const res = await db
    .select({
      id: list.id,
      name: list.name,
      message: list.message,
      createdAt: list.createdAt,
    })
    .from(list)
    .where(and(eq(list.id, listId), eq(list.userId, userId)))
    .limit(1);

  if (!res[0]) {
    throw new Error(ERROR_LIST_NOT_FOUND);
  }

  return res[0];
};

// getListWithTestimonials fetched list (id, name) and its testimonials for a given user
export const getListWithTestimonials = async (listId: string, userId: string) =>
  unstable_cache(
    async () => {
      const rows = await db
        .select({
          listId: list.id,
          listName: list.name,

          testimonialId: testimonial.id,
          authorName: testimonial.authorName,
          authorTitle: testimonial.authorTitle,
          authorCompany: testimonial.authorCompany,
          content: testimonial.content,
          rating: testimonial.rating,
          status: testimonial.status,
          createdAt: testimonial.createdAt,
        })
        .from(list)
        .leftJoin(testimonial, eq(testimonial.listId, list.id))
        .where(and(eq(list.id, listId), eq(list.userId, userId)))
        .orderBy(desc(testimonial.createdAt));

      if (rows.length === 0) {
        throw new Error(ERROR_LIST_NOT_FOUND);
      }

      return {
        list: {
          id: rows[0].listId,
          name: rows[0].listName,
        },
        testimonials: rows
          .filter(r => r.testimonialId !== null)
          .map(r => ({
            id: r.testimonialId!,
            authorName: r.authorName!,
            authorTitle: r.authorTitle,
            authorCompany: r.authorCompany,
            content: r.content!,
            rating: r.rating,
            status: r.status!,
            createdAt: r.createdAt!,
          })),
      };
    },
    [`list:${listId}`],
    {
      tags: [`list:${listId}`, `lists:${userId}`, `dashboard:${userId}`],
    },
  )();

export const getListWithTestimonialCount = async (userId: string) =>
  unstable_cache(
    async () => {
      return db
        .select({
          id: list.id,
          name: list.name,
          createdAt: list.createdAt,
          testimonialCount: count(testimonial.id),
        })
        .from(list)
        .leftJoin(testimonial, eq(testimonial.listId, list.id))
        .where(eq(list.userId, userId))
        .groupBy(list.id)
        .orderBy(list.createdAt);
    },
    [`list:${userId}`],
    {
      tags: [`lists:${userId}`, `dashboard:${userId}`],
    },
  )();

export const getTotalTestimonialCount = async (userId: string) =>
  unstable_cache(
    async () => {
      const res = await db
        .select({ total: count(testimonial.id) })
        .from(testimonial)
        .innerJoin(list, eq(testimonial.listId, list.id))
        .where(eq(list.userId, userId));

      return res[0]?.total ?? 0;
    },
    [`testimonial-count:${userId}`],
    {
      tags: [`dashboard:${userId}`],
    },
  )();

/* -------------------------------------------------------------------------- */
/* Mutations */
/* -------------------------------------------------------------------------- */

export const createListAction = async (listInfo: NewListFormState) => {
  const user = await getUser();
  if (!user) throw new Error('Unauthorized');

  const name = listInfo.listName.trim();
  const message = listInfo.inviteMessage.trim();

  validateListInput(name, message);

  await db.transaction(async tx => {
    const [{ total }] = await tx
      .select({ total: count(list.id) })
      .from(list)
      .where(eq(list.userId, user.id));

    const limit = PLAN_LIMITS[user.plan].listLimit;
    if (total >= limit) {
      throw new Error(`Your current plan allows a maximum of ${limit} lists.`);
    }

    await tx.insert(list).values({
      id: crypto.randomUUID(),
      userId: user.id,
      name,
      message,
    });
  });

  updateTag(`lists:${user.id}`);
  redirect(LIST_PATH);
};

export const updateListAction = async (listId: string, listInfo: ListFormState) => {
  const user = await getUser();
  if (!user) throw new Error('Unauthorized');

  const name = listInfo.listName.trim();
  const message = listInfo.inviteMessage.trim();

  validateListInput(name, message);

  const res = await db
    .update(list)
    .set({ name, message })
    .where(and(eq(list.id, listId), eq(list.userId, user.id)))
    .returning({ id: list.id });

  if (res.length === 0) {
    throw new Error('List not found or access denied');
  }

  updateTag(`list:${listId}`);
  updateTag(`lists:${user.id}`);

  redirect(LIST_PATH);
};

export const deleteListAction = async (listId: string) => {
  const user = await getUser();
  if (!user) throw new Error('Unauthorized');

  const res = await db
    .delete(list)
    .where(and(eq(list.id, listId), eq(list.userId, user.id)))
    .returning({ id: list.id });

  if (res.length === 0) {
    throw new Error('List not found or access denied');
  }

  updateTag(`lists:${user.id}`);
  updateTag(`dashboard:${user.id}`);

  redirect(LIST_PATH);
};
