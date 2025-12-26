import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import { getListWithTestimonialCount } from '@/actions/list.actions';

import Heading from '@/components/dashboard-heading';
import CreateListButton from '@/components/dashboard/create-list-btn';
import { ListSkeleton } from '@/components/dashboard/list-skeleton';
import RenderLists from '@/components/dashboard/render-lists';

const InvitePage = async () => {
  const user = await getUser();
  if (!user) redirect('/login');

  const userLists = await getListWithTestimonialCount(user.id);

  const hasLists = userLists.length > 0;

  return (
    <>
      <div className='flex justify-between'>
        <Heading text='Lists' />
        {hasLists && <CreateListButton />}
      </div>

      <Suspense fallback={<ListSkeleton />}>
        {hasLists ? (
          <RenderLists lists={userLists} className='mt-8' />
        ) : (
          <div className='flex flex-col items-center justify-center'>
            You don&apos;t have any lists yet.
            <CreateListButton />
          </div>
        )}
      </Suspense>
    </>
  );
};

export default InvitePage;
