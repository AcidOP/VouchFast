'use server';

import { headers } from 'next/headers';

import { auth } from '@/lib/auth';

const getUser = async () => {
  const session = await auth.api.getSession({ headers: await headers() });
  return session?.user || null;
};

export default getUser;
