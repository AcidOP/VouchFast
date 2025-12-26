import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';

import NewListClient from '@/components/lists/create/new-list.client';

const NewListPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  return <NewListClient />;
};

export default NewListPage;
