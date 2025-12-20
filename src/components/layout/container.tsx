import { cn } from '@/lib/utils';

import type { ReactNode } from 'react';

interface IProps {
  className?: string;
  children: ReactNode;
}

const Container = ({ className, children }: IProps) => {
  return (
    <main
      className={cn(
        'container mx-auto px-5 sm:max-w-5xl lg:max-w-4xl lg:px-0 xl:max-w-7xl',
        className,
      )}
    >
      {children}
    </main>
  );
};

export default Container;
