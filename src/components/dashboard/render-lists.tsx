import OverviewCard from './overview-card';

import { cn } from '@/lib/utils';

import Button from '@/components/ui/button';

type List = {
  id: string;
  name: string;
  createdAt: Date;
  testimonialCount: number;
};

interface IProps {
  lists: List[];
  className?: string;
}

const RenderLists = ({ lists, className }: IProps) => {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-3', className)}>
      {lists.map(list => {
        return (
          <OverviewCard
            key={list.id}
            title={list.name}
            href={`/dashboard/lists/${list.id}`}
          >
            <div className='flex h-min items-center justify-between'>
              Items: {list.testimonialCount || 0}
              <Button size='sm' className='z-50'>
                View
              </Button>
            </div>
          </OverviewCard>
        );
      })}
    </div>
  );
};
RenderLists.displayName = 'RenderLists';

export default RenderLists;
