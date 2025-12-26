import type { NewListFormState } from '@/components/lists/create/new-list.client';

interface Props {
  value: NewListFormState;
}

const InvitePreview = ({ value }: Props) => {
  return (
    <div className='bg-muted rounded-lg p-6'>
      <p className='text-muted-foreground mb-4 text-sm'>
        Live preview (what your client sees)
      </p>

      <hr className='border-accent-foreground/10 mb-6 border' />

      <div className='shadow'>
        <h3 className='text-lg font-semibold'>
          {value.listName || 'Your Project Name'}
        </h3>

        <div className='bg-muted mt-6 rounded border'>
          <p className='text-sm'>{value.inviteMessage}</p>
        </div>

        <div className='mt-6'>
          <button
            disabled
            className='bg-primary text-primary-foreground w-full rounded px-4 py-2 opacity-80'
          >
            Submit testimonial
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvitePreview;
