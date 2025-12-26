import { env } from '@/lib/env';

import DashboardHeading from '@/components/dashboard-heading';
import DeleteList from '@/components/lists/buttons/delete-list-btn';
import EditListBtn from '@/components/lists/buttons/edit-list-btn';
import ShareListLink from '@/components/lists/buttons/share-list-btn';

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
          <EditListBtn listID={list.id} />
          <DeleteList listId={list.id} />
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
