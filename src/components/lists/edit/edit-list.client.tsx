'use client';

import { useState } from 'react';

import ListForm from '@/components/lists/edit/form';
import InvitePreview from '@/components/lists/invite-form-preview';

import type { TestimonialStatus } from '@/db/schema';

export type ListFormState = {
  listName: string;
  inviteMessage: string;
  defaultTestimonialState: TestimonialStatus;
};

interface IProps {
  id: string;
  name: string;
  message: string;
  defaultTestimonialState: TestimonialStatus;
}

const EditListClient = (list: IProps) => {
  const [state, setState] = useState<ListFormState>({
    listName: list.name,
    inviteMessage: list.message,
    defaultTestimonialState: list.defaultTestimonialState,
  });

  return (
    <div className='grid min-h-[calc(100vh-8rem)] grid-cols-1 gap-8 rounded-xl p-6 lg:grid-cols-2'>
      <ListForm listId={list.id} value={state} onChange={setState} />
      <InvitePreview value={state} />
    </div>
  );
};

export default EditListClient;
