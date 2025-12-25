import { PLANS } from '@/drizzle/schema';

import { cn } from '@/lib/utils';

import Heading from '@/components/dashboard-heading';
import OverviewCard from '@/components/dashboard/overview-card';

import type { Plan } from '@/drizzle/schema';

interface IProps {
  plan: Plan;
  listCount: number;
  testimonialCount: number;
  className?: string;
}

const PLAN_LIMITS = {
  [PLANS.FREE]: {
    lists: 1,
    testimonials: 3,
  },
  [PLANS.PAID]: {
    lists: 15,
    testimonials: Infinity,
  },
} as const;

const formatQuota = (used: number, limit: number) =>
  limit === Infinity ? `${used}/∞` : `${used}/${limit}`;

const DashboardOverview = ({
  plan,
  listCount,
  testimonialCount,
  className,
}: IProps) => {
  const limits = PLAN_LIMITS[plan];

  const listQuota = formatQuota(listCount, limits.lists);
  const testimonialQuota = formatQuota(testimonialCount, limits.testimonials);

  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>{testimonialQuota}</OverviewCard>

        <OverviewCard title='Plan' href='/pricing'>
          {plan}
        </OverviewCard>

        <OverviewCard title='Lists' href='/dashboard/lists'>
          {listQuota}
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
