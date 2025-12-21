import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import { getListsByUser } from '@/actions/list.actions';

import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';
import Container from '@/components/layout/container';

export const dynamic = 'force-dynamic';

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  const lists = await getListsByUser(user.id);

  return (
    <Container>
      <DashboardOverview user={user} />
      <UserLists lists={lists} />
    </Container>
  );
};

export default DashboardPage;
