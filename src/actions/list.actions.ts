'use server';

import { db } from '@/drizzle/db';
import { list, testimonial } from '@/drizzle/schema';
import { count, eq } from 'drizzle-orm';

export const getListWithTestimonialCount = async (userId: string) => {
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
};

export const getTotalTestimonialCount = async (userId: string) => {
  const res = await db
    .select({
      total: count(testimonial.id),
    })
    .from(testimonial)
    .innerJoin(list, eq(testimonial.listId, list.id))
    .where(eq(list.userId, userId));

  return res[0]?.total || 0;
};
