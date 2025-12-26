'use server';

import { db } from '@/drizzle/db';
import { list, testimonial } from '@/drizzle/schema';
import { and, eq } from 'drizzle-orm';
import { updateTag } from 'next/cache';

import getUser from '@/actions/auth.user';

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
