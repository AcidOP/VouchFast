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

const DashboardOverview = async ({
  plan,
  listCount,
  testimonialCount,
  className,
}: IProps) => {
  const isPremimum = plan === PLANS.PAID;

  const listQuota = isPremimum ? `${listCount}/15` : `${listCount}/1`;
  const testimonialQuota = isPremimum
    ? `${testimonialCount}/∞`
    : `${testimonialCount}/3`;

  return (
    <>
      <Heading text='Overview' />

      <div className={cn('mt-16 grid gap-6 lg:grid-cols-3', className)}>
        <OverviewCard title='Testimonials'>{testimonialQuota}</OverviewCard>
        <OverviewCard title='Plan' link='/pricing'>
          {plan}
        </OverviewCard>
        <OverviewCard title='Lists' link='/dashboard/lists'>
          {listQuota}
        </OverviewCard>
      </div>
    </>
  );
};

export default DashboardOverview;
