import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';

import BillingInfo from '@/components/dashboard/billing-info';

const BillingPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  return <BillingInfo {...user} />;
};

export default BillingPage;
