'use client';

import * as React from 'react';

import { Root as LabelPrimitiveRoot } from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitiveRoot>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitiveRoot>
>(({ className, ...props }, ref) => (
  <LabelPrimitiveRoot
    ref={ref}
    className={cn(
      'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className,
    )}
    {...props}
  />
));
Label.displayName = 'Label';

export default Label;
