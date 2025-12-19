import { Fragment } from 'react';

import Image from 'next/image';

import Title from './title';

import invertArrowSvg from '@/assets/arrow-invert.svg';
import arrowSvg from '@/assets/arrow.svg';

import type { StaticImageData } from 'next/image';

const TestimonialStep = ({ emoji, text }: { emoji: string; text: string }) => {
  return (
    <section className='w-full max-w-80'>
      <span className='text-3xl lg:text-5xl'>{emoji}</span>
      <p className='mt-2 text-gray-400 lg:mt-5 lg:text-xl'>{text}</p>
    </section>
  );
};

const Consequences = () => {
  const steps = [
    { emoji: '🧑✍️', text: 'Endless testimonials' },
    { emoji: '🔄', text: 'Approval loops' },
    { emoji: '📉', text: 'Brand image weakens' },
    { emoji: '😕', text: 'Reputation fades' },
  ];

  return (
    <div id='features' className='layout my-36 text-center'>
      <Title />

      <p className='mt-7 font-medium text-gray-400 md:text-xl lg:mt-10'>
        80% of potential clients need social proof to trust your business.
      </p>

      <div className='mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-5 md:flex-row lg:mt-24'>
        {steps.map((step, index) => (
          <Fragment key={step.text}>
            <TestimonialStep emoji={step.emoji} text={step.text} />
            {index % 2 === 0 && index !== steps.length - 1 ? (
              <Image
                src={arrowSvg as StaticImageData}
                width={50}
                height={50}
                alt=''
                className='md:my-0 md:h-16 md:w-16 md:-rotate-90'
              />
            ) : index % 2 !== 0 && index !== steps.length - 1 ? (
              <Image
                src={invertArrowSvg as StaticImageData}
                width={50}
                height={50}
                alt=''
                className='md:my-0 md:h-16 md:w-16 md:-rotate-90'
              />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Consequences;
