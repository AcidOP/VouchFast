import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';

import AccountClient from '@/components/dashboard/account-form';

const AccountPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  return <AccountClient {...user} image={user.image ?? undefined} />;
};

export default AccountPage;
