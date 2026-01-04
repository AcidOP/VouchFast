import { getPublicListForSubmission } from '@/actions/list.actions';

import SubmitTestimonialClient from '@/components/testimonials/create/submit-testimonial.client';

const SubmitTestimonial = async ({ params }: PageProps<'/submit/[listId]'>) => {
  const { listId } = await params;

  const list = await getPublicListForSubmission(listId);
  if (!list) {
    return <InvalidList />;
  }

  return <SubmitTestimonialClient {...list} />;
};

const InvalidList = () => (
  <div className='mx-auto mt-32 max-w-md text-center'>
    <h1 className='text-xl font-semibold'>Invalid link</h1>
    <p className='text-muted-foreground mt-2'>
      This testimonial link is no longer valid.
    </p>
  </div>
);

export default SubmitTestimonial;
