import { notFound, redirect } from 'next/navigation';

import getUser from '@/actions/auth.user';
import { getEditableListById } from '@/actions/list.actions';

import EditListClient from '@/components/lists/edit/edit-list.client';

const EditList = async ({ params }: PageProps<'/dashboard/lists/[listId]/edit'>) => {
  const user = await getUser();
  if (!user) redirect('/login');

  const { listId } = await params;
  if (!listId) return notFound();

  const list = await getEditableListById(listId, user.id);

  return (
    <div className='bg-background text-foreground min-h-screen p-4'>
      <EditListClient {...list} />
    </div>
  );
};

export default EditList;
