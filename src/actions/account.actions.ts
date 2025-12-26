'use server';

import { db } from '@/drizzle/db';
import { user } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import { updateTag } from 'next/cache';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { z } from 'zod';

import getUser from '@/actions/auth.user';

import { auth } from '@/lib/auth';

const updateAccountSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
});

export const updateAccountAction = async (input: unknown) => {
  const currentUser = await getUser();
  if (!currentUser) {
    return { success: false, message: 'Unauthorized' };
  }

  const data = updateAccountSchema.parse(input);

  if (data.name === currentUser.name && data.email === currentUser.email) {
    return {
      success: true,
      message: 'No changes made',
    };
  }

  try {
    await db
      .update(user)
      .set({
        name: data.name,
        email: data.email,
      })
      .where(eq(user.id, currentUser.id));
  } catch (_err) {
    return {
      success: false,
      message: 'Failed to update account',
    };
  }

  updateTag(`dashboard:${currentUser.id}`);

  return {
    success: true,
    message: 'Account updated successfully',
  };
};

export const deleteAccountAction = async () => {
  const currentUser = await getUser();
  if (!currentUser) {
    throw new Error('Unauthorized');
  }

  await Promise.all([
    await db.delete(user).where(eq(user.id, currentUser.id)),
    await auth.api.signOut({ headers: await headers() }),
  ]);

  redirect('/');
};
