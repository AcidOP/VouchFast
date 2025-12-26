import { getPublicListForSubmission } from '@/actions/list.actions';

import SubmitTestimonialClient from '@/components/testimonials/create/submit-testimonial.client';

const SubmitTestimonial = async ({ params }: PageProps<'/submit/[listId]'>) => {
  const { listId } = await params;

  let list;
  try {
    list = await getPublicListForSubmission(listId);
  } catch {
    return (
      <div className='mx-auto mt-32 max-w-md text-center'>
        <h1 className='text-xl font-semibold'>Invalid link</h1>
        <p className='text-muted-foreground mt-2'>
          This testimonial link is no longer valid.
        </p>
      </div>
    );
  }

  return <SubmitTestimonialClient list={list} />;
};

export default SubmitTestimonial;
