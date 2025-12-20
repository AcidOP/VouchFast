'use server';

import { headers } from 'next/headers';

import { auth } from '@/lib/auth';

import type { User } from 'better-auth';

const getUser = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return null;

  return session.user satisfies User;
};

export default getUser;
