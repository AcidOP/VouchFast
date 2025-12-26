'use client';

import { useState } from 'react';

import ListForm from '@/components/lists/create/list-form';
import InvitePreview from '@/components/lists/invite-form-preview';

export type NewListFormState = {
  listName: string;
  inviteMessage: string;
};

const DEFAULT_STATES = {
  listName: '',
  inviteMessage: "Hey! I'd love a short testimonial about our work together.",
};

const NewListClient = () => {
  const [state, setState] = useState<NewListFormState>(DEFAULT_STATES);
  return (
    <div className='grid min-h-[calc(100vh-8rem)] grid-cols-1 gap-8 rounded-xl p-6 lg:grid-cols-2'>
      <ListForm value={state} onChange={setState} />
      <InvitePreview value={state} />
    </div>
  );
};

export default NewListClient;
