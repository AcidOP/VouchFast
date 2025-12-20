'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

import leafSvg from '@/assets/leaf.svg';
import starSvg from '@/assets/star.svg';

import type { StaticImageData } from 'next/image';

const Doodles = () => {
  return (
    <>
      <motion.div
        initial={{ x: -100, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'backInOut' }}
        className='absolute -bottom-1/4 left-0 -z-10 h-37.5 w-37.5 lg:bottom-0 lg:h-75 lg:w-75'
      >
        <Image
          src={starSvg as StaticImageData}
          width={300}
          height={300}
          alt='doodle'
          className='animation-duration-8000 animate-spin opacity-20 lg:opacity-30'
        />
      </motion.div>

      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, ease: 'backInOut' }}
        className='absolute right-5 bottom-0 -z-10 h-25 w-25 rotate-45 lg:top-0 lg:right-20 lg:h-45 lg:w-45'
      >
        <Image
          src={leafSvg as StaticImageData}
          width={300}
          height={300}
          alt='doodle'
          className='animation-duration-9000 animate-spin opacity-20 lg:opacity-30'
        />
      </motion.div>
    </>
  );
};

export default Doodles;
