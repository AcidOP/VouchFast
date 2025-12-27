'use server';

import { db } from '@/drizzle/db';
import { list, testimonial, user } from '@/drizzle/schema';
import { and, count, eq } from 'drizzle-orm';
import { updateTag } from 'next/cache';
import z from 'zod';

import getUser from '@/actions/auth.user';

import { PLAN_LIMITS } from '@/lib/plan-limits';

const testimonialSchema = z.object({
  listId: z.string(),
  authorName: z.string().min(2).max(100),
  authorTitle: z.string().max(100).optional(),
  authorCompany: z.string().max(100).optional(),
  content: z.string().min(10).max(2000),
});

export const createTestimonialAction = async (input: unknown) => {
  const data = testimonialSchema.parse(input);

  const res = await db
    .select({
      listId: list.id,
      userId: list.userId,
      plan: user.plan,
    })
    .from(list)
    .innerJoin(user, eq(user.id, list.userId))
    .where(eq(list.id, data.listId))
    .limit(1);

  if (!res[0]) {
    throw new Error('Invalid list');
  }

  const { userId, listId, plan } = res[0];

  // 🔹 Count testimonials for this list
  const [{ total }] = await db
    .select({ total: count(testimonial.id) })
    .from(testimonial)
    .where(eq(testimonial.listId, listId));

  const limit = PLAN_LIMITS[plan].maxTestimonials;
  if (total >= limit) {
    throw new Error(
      `Your current plan allows a maximum of ${limit} testimonials per list.`,
    );
  }

  await db.insert(testimonial).values({
    id: crypto.randomUUID(),
    listId,
    authorName: data.authorName,
    authorTitle: data.authorTitle,
    authorCompany: data.authorCompany,
    content: data.content,
  });

  updateTag(`list:${listId}`);
  updateTag(`dashboard:${userId}`);
};

export const deleteTestimonialAction = async (testimonialId: string) => {
  const user = await getUser();
  if (!user) {
    return {
      success: false,
      message: 'Unauthorized',
    };
  }

  // First verify ownership by checking if testimonial belongs to user's list
  const testimonialToDelete = await db
    .select({
      id: testimonial.id,
      listId: testimonial.listId,
    })
    .from(testimonial)
    .innerJoin(list, eq(testimonial.listId, list.id))
    .where(and(eq(testimonial.id, testimonialId), eq(list.userId, user.id)))
    .limit(1);

  if (testimonialToDelete.length === 0) {
    return {
      success: false,
      message: 'Testimonial not found or access denied',
    };
  }

  const { listId } = testimonialToDelete[0];

  // Now delete the testimonial
  await db.delete(testimonial).where(eq(testimonial.id, testimonialId));

  // 🔁 Revalidate caches
  updateTag(`list:${listId}`);
  updateTag(`dashboard:${user.id}`);

  return {
    success: true,
    message: 'Testimonial deleted successfully',
  };
};

export const editTestimonialAction = async (
  testimonialId: string,
  input: unknown,
) => {
  const user = await getUser();
  if (!user) {
    return {
      success: false,
      message: 'Unauthorized',
    };
  }

  const data = testimonialSchema.partial().parse(input);

  const result = await db
    .update(testimonial)
    .set({
      content: data.content,
      authorName: data.authorName,
      authorTitle: data.authorTitle,
      authorCompany: data.authorCompany,
    })
    .from(list)
    .where(
      and(
        eq(testimonial.id, testimonialId),
        eq(testimonial.listId, list.id),
        eq(list.userId, user.id),
      ),
    )
    .returning({
      listId: testimonial.listId,
    });

  if (result.length === 0) {
    return {
      success: false,
      message: 'Testimonial not found or access denied',
    };
  }

  const { listId } = result[0];

  /**
   * 🔁 Revalidate all dependent caches
   */
  updateTag(`list:${listId}`);
  updateTag(`lists:${user.id}`);
  updateTag(`dashboard:${user.id}`);

  return {
    success: true,
    message: 'Testimonial updated successfully',
  };
};
