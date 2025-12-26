'use client';

import { useState } from 'react';

import ListForm from '@/components/lists/edit/form';
import InvitePreview from '@/components/lists/invite-form-preview';

export type ListFormState = {
  listName: string;
  inviteMessage: string;
};

interface IProps {
  id: string;
  name: string;
  message: string;
}

const EditListClient = (list: IProps) => {
  const [state, setState] = useState<ListFormState>({
    listName: list.name,
    inviteMessage: list.message,
  });

  return (
    <div className='grid min-h-[calc(100vh-8rem)] grid-cols-1 gap-8 rounded-xl p-6 lg:grid-cols-2'>
      <ListForm listId={list.id} value={state} onChange={setState} />
      <InvitePreview value={state} />
    </div>
  );
};

export default EditListClient;
