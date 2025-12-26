import { Edit } from 'lucide-react';
import Link from 'next/link';

import { env } from '@/lib/env';

import DashboardHeading from '@/components/dashboard-heading';
import DeleteList from '@/components/lists/buttons/delete-list-btn';
import ShareListLink from '@/components/lists/buttons/share-list-btn';

import Button from '@/components/ui/button';

import type { list } from '@/drizzle/schema';
import type { InferSelectModel } from 'drizzle-orm';

interface IProps {
  list: InferSelectModel<typeof list>;
}

const ListHeader = ({ list }: IProps) => {
  return (
    <div className='w-full max-w-3xl'>
      <div className='flex items-center justify-between'>
        <DashboardHeading text={list.name} />

        <div className='flex gap-3'>
          <ShareListLink link={`${env.NEXT_PUBLIC_APP_URL}/submit/${list.id}`} />

          <Link href={`/dashboard/lists/${list.id}/edit`}>
            <Button variant='outline' className='text-zinc-400 hover:text-zinc-300'>
              <Edit className='mr-2 h-4 w-4' />
              Edit List
            </Button>
          </Link>

          <DeleteList listId={list.id} />
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
