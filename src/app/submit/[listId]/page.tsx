import Link from 'next/link';

import { getPublicListForSubmission } from '@/actions/list.actions';

import { PLAN_LIMITS } from '@/lib/plan-limits';

import SubmitTestimonialClient from '@/components/testimonials/create/submit-testimonial.client';

import Button from '@/components/ui/button';

const SubmitTestimonial = async ({ params }: PageProps<'/submit/[listId]'>) => {
  const { listId } = await params;

  const list = await getPublicListForSubmission(listId);
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!list) {
    return <InvalidList />;
  }

  if (list.testimonialCount >= PLAN_LIMITS[list.plan].testimonialLimit) {
    return <FreeTierCapped />;
  }

  return <SubmitTestimonialClient {...list} />;
};

const InvalidList = () => (
  <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
    <h1 className='font-brico text-6xl font-black lg:text-7xl'>Invalid Link</h1>
    <p className='text-muted-foreground mt-2 text-lg font-medium'>
      This testimonial link is unavailable or expired.
    </p>

    <Link href='/'>
      <Button className='mt-8'>Return Home</Button>
    </Link>
  </div>
);

const FreeTierCapped = () => (
  <div className='flex min-h-[70vh] flex-col items-center justify-center text-center'>
    <h1 className='font-brico text-6xl font-black lg:text-7xl'>Oops!</h1>

    <p className='mt-10 max-w-3xl text-xl font-medium text-neutral-200'>
      Looks like the owner has received a lot of feedback already! <br /> To keep
      submitting testimonials, they&apos;ll need to upgrade their plan.
    </p>

    <p className='text-muted-foreground mt-6 max-w-lg text-lg font-medium'>
      If you’re in touch with them, let them know they&apos;ll need to upgrade to
      keep collecting feedback.
    </p>
  </div>
);

export default SubmitTestimonial;
