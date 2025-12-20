import { Check } from 'lucide-react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

// import Oauth from '@/components/Oauth';

import Button from '@/components/ui/button';

import type { PricingBoxProps } from './pricing-mode';

const PricingBox = ({
  heading,
  price,
  originalPrice,
  description,
  features,
  subheading,
  active,
  link,
}: PricingBoxProps) => {
  return (
    <div
      className={cn(
        'bg-accent flex w-full flex-col rounded-lg p-10 shadow-lg',
        active && 'border-primary relative border-2',
      )}
    >
      <h3 className='font-brico text-5xl font-black'>{heading}</h3>

      <p className='mt-5 text-gray-300'>{description}</p>

      <div className='mt-7 flex items-center space-x-3 border-b border-zinc-700 pb-5'>
        {originalPrice && (
          <p className='text-xl text-gray-400 line-through'>{originalPrice}</p>
        )}
        <p className='font-brico text-5xl font-black'>{price}</p>
      </div>

      <div className='flex h-full flex-col justify-between'>
        <ul className='mt-5'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center'>
              <Check className='text-primary' size={25} />
              <p className='my-1 ml-2 text-lg text-gray-300'>{feature}</p>
            </li>
          ))}
        </ul>

        {/* {!active && (
          <Oauth
            type='signup'
            className='mt-10'
            btnClassName='bg-primary hover:bg-primary/90 text-black'
          />
        )} */}

        {/* {active && ( */}
        <Link href={link} className='z-10 mt-10 w-full'>
          <Button className='text-primary w-full cursor-pointer border-2 border-black bg-black text-xl hover:bg-zinc-900'>
            Get Started
          </Button>
        </Link>
        {/* )} */}
      </div>

      <p className='mt-2 text-center text-gray-400'>{subheading}</p>

      {active && (
        <>
          <div className='bg-primary absolute top-0 right-0 left-1/2 w-min -translate-x-1/2 -translate-y-1/2 rounded-full px-3 font-medium text-nowrap text-black'>
            Launch offer
          </div>
          <div className='bg-primary absolute inset-0 h-full w-full rounded-lg opacity-10' />
        </>
      )}
    </div>
  );
};

export default PricingBox;
