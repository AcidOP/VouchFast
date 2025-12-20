import { cn } from '@/lib/utils';

import Heading from '@/components/dashboard-heading';
import OverviewCard from '@/components/dashboard/overview-card';

import type { User } from 'better-auth';

interface IProps {
  user: User;
  className?: string;
}

const DashboardOverview = async ({ user, className }: IProps) => {
  //   const userId = user.id;
  //   const isPremimum = user.plan === Plan.PAID;

  //   const listCount = await getListCount(userId);
  //   const testimonialCount = await getTestimonialCount(userId, 'user');

  //   const listQuota = isPremimum ? `${listCount}/15` : `${listCount}/1`;
  //   const testimonialQuota = isPremimum
  //     ? `${testimonialCount}/∞`
  //     : `${testimonialCount}/3`;

  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>2</OverviewCard>
        {/* <OverviewCard title='Testimonials'>{testimonialQuota}</OverviewCard> */}
        <OverviewCard title='Plan' link='/pricing'>
          {/* {user.plan} */}
          Free
        </OverviewCard>
        <OverviewCard title='Lists' link='/dashboard/lists'>
          {/* {listQuota} */}
          2/10
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
