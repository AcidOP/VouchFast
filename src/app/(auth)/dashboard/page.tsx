import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';

import DashboardOverview from '@/components/dashboard/overview';
import Container from '@/components/layout/container';

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  return (
    <Container>
      <DashboardOverview user={user} />
      {/* <UserLists userId={userId} /> */}
    </Container>
  );
};

export default DashboardPage;
