'use client';

import { useEffect, useRef, useState } from 'react';

import { RoughNotation } from 'react-rough-notation';

import { cn } from '@/lib/utils';

const Title = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  // Trigger only once
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '-350px' },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <h2
      className='font-brico mx-auto max-w-5xl text-4xl font-bold lg:text-6xl'
      ref={containerRef}
    >
      This can happen to{' '}
      <RoughNotation type='circle' show={isInView}>
        <span
          className={cn(
            'p-2 text-white transition-all duration-200',
            isInView && 'text-red-600',
          )}
        >
          You
        </span>
      </RoughNotation>{' '}
      right now!
    </h2>
  );
};

export default Title;
