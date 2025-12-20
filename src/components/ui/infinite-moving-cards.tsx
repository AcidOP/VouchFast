'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration = '--animation-duration';
      if (speed === 'fast') {
        containerRef.current.style.setProperty(duration, '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty(duration, '40s');
      } else {
        containerRef.current.style.setProperty(duration, '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-2',
          start && 'animate-scroll',
          pauseOnHover && 'hover:paused',
        )}
      >
        {items.map(item => (
          <li
            className='flex w-full max-w-84 shrink-0 rounded-2xl bg-zinc-800 p-4 lg:max-w-sm'
            key={item.name}
          >
            <section className='flex w-full flex-col justify-between'>
              <div
                aria-hidden='true'
                className='user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]'
              ></div>
              <div className='relative z-20 text-xs leading-[1.6] font-bold text-gray-300 lg:text-sm'>
                {item.quote}
              </div>

              <div className='mt-5 flex flex-col gap-1'>
                <span className='text-xs font-bold text-gray-300 lg:text-sm lg:leading-[1.6]'>
                  {item.name}
                </span>
                <span className='text-xs font-bold text-gray-300 lg:text-sm lg:leading-[1.6]'>
                  {item.title}
                </span>
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
