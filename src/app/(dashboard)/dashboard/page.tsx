import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import { getDashboardData } from '@/actions/list.actions';

import { ListSkeleton } from '@/components/dashboard/list-skeleton';
import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';
import Container from '@/components/layout/container';

import type { Plan } from '@/db/schema';

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) {
    redirect('/login');
  }

  const { lists, totalCount } = await getDashboardData(user.id);

  return (
    <Container className='space-y-16'>
      <DashboardOverview
        plan={user.plan as Plan}
        listCount={lists.length}
        testimonialCount={totalCount}
      />

      <Suspense fallback={<ListGridSkeleton />}>
        <UserLists lists={lists} />
      </Suspense>
    </Container>
  );
};

const ListGridSkeleton = () => {
  return (
    <div className='grid gap-6 sm:grid-cols-2'>
      <ListSkeleton />
      <ListSkeleton />
    </div>
  );
};

export default DashboardPage;
