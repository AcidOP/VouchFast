import { Plus } from 'lucide-react';
import Link from 'next/link';

import OverviewCard from './overview-card';

import { cn } from '@/lib/utils';

import Heading from '@/components/dashboard-heading';

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

const UserLists = async ({ lists }: IProps) => {
  const noLists = lists.length === 0;

  return (
    <>
      <div className='flex justify-between'>
        <Heading text='Lists' />
        {!noLists && <CreateListButton />}
      </div>

      {noLists && (
        <div className='flex w-full flex-col items-center justify-center'>
          <span>You don&apos;t have any lists yet.</span>

          <CreateListButton />
        </div>
      )}

      {!noLists && <RenderLists lists={lists} />}
    </>
  );
};

const CreateListButton = () => (
  <Link href='/dashboard/lists/new'>
    <Button className='mt-4 flex gap-3 rounded'>
      <Plus /> Create new List
    </Button>
  </Link>
);

const RenderLists = ({ lists, className }: IProps) => {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-3', className)}>
      {lists.map(list => {
        return (
          <OverviewCard
            key={list.id}
            title={list.name}
            link={`/dashboard/lists/${list.id}`}
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

export default UserLists;
