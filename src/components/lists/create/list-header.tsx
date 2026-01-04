import { env } from '@/lib/env';

import DashboardHeading from '@/components/dashboard-heading';
import DeleteList from '@/components/lists/buttons/delete-list-btn';
import EditListBtn from '@/components/lists/buttons/edit-list-btn';
import ShareListLink from '@/components/lists/buttons/share-list-btn';

interface IProps {
  id: string;
  name: string;
}

const ListHeader = ({ id, name }: IProps) => {
  return (
    <div className='w-full max-w-3xl'>
      <div className='flex items-center justify-between'>
        <DashboardHeading text={name} />

        <div className='flex gap-3'>
          <ShareListLink link={`${env.NEXT_PUBLIC_APP_URL}/submit/${id}`} />
          <EditListBtn listID={id} />
          <DeleteList listId={id} />
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
