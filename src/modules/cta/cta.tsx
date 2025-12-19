import Link from 'next/link';

import Button from '@/components/ui/button';

const CTA = () => {
  return (
    <div className='layout'>
      <div className='bg-primary flex w-full flex-col justify-between rounded-2xl px-8 py-5 lg:flex-row lg:items-center lg:px-16 lg:py-12'>
        <div>
          <h1 className='font-brico text-3xl font-black text-black lg:text-6xl'>
            Ready to get started?
          </h1>
          <p className='mt-6 w-full font-bold text-gray-800 lg:max-w-2xl lg:text-xl'>
            Get the praise you deserve <br />
            Because bragging just got easier!
          </p>
        </div>

        <Link href='/auth'>
          <Button className='mt-5 bg-black px-10 py-3 text-white hover:bg-zinc-900 lg:mt-0'>
            Get Started &rarr;
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
