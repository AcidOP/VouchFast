import RenderLists from './render-lists';

import Heading from '@/components/dashboard-heading';
import CreateListButton from '@/components/dashboard/create-list-btn';

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

export default UserLists;
