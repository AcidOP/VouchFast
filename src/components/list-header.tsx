import { Edit } from 'lucide-react';
import { notFound } from 'next/navigation';

import { ShareListLink } from './share-list-btn';

import { getList } from '@/server/db/user';

import DashboardHeading from '@/components/DashboardHeading';

import { Button } from '@/components/ui/button';

interface IProps {
  listId: string;
}

const ListHeader = async ({ listId }: IProps) => {
  const list = await getList(listId);

  if (!list) return notFound();

  return (
    <div className='w-full max-w-3xl'>
      <div className='flex justify-between'>
        <DashboardHeading text={list.name} />

        <div className='flex gap-3'>
          <ShareListLink link={`${process.env.BASE_URL}/submit/${list.id}`} />

          <Button variant='outline' className='text-zinc-400 hover:text-zinc-300'>
            <Edit className='mr-2 h-4 w-4' />
            Edit List
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListHeader;