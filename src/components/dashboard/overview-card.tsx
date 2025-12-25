import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ReactNode } from 'react';

interface OverviewCardProps {
  title: string;
  href?: string;
  children?: ReactNode;
}

const OverviewCard = ({ title, children, href }: OverviewCardProps) => {
  const CardComponent = (
    <Card className='bg-neutral-900 transition-shadow hover:shadow-md'>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className='block'>
        {CardComponent}
      </Link>
    );
  }
  return CardComponent;
};
OverviewCard.displayName = 'OverviewCard';

export default OverviewCard;
