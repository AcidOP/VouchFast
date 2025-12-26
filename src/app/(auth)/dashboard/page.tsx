import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import {
  getListWithTestimonialCount,
  getTotalTestimonialCount,
} from '@/actions/list.actions';

import UserLists from '@/components/dashboard/lists';
import DashboardOverview from '@/components/dashboard/overview';
import Container from '@/components/layout/container';

import type { Plan } from '@/drizzle/schema';

export const dynamic = 'force-dynamic';

const DashboardPage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  const [lists, testimonialCount] = await Promise.all([
    getListWithTestimonialCount(user.id),
    getTotalTestimonialCount(user.id),
  ]);

  return (
    <Container className='space-y-16'>
      <DashboardOverview
        plan={user.plan as Plan}
        listCount={lists.length}
        testimonialCount={testimonialCount}
      />
      <UserLists lists={lists} />
    </Container>
  );
};

export default DashboardPage;
