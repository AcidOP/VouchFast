import Link from 'next/link';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import type { ReactNode } from 'react';

interface OverviewCardProps {
  title: string;
  children?: ReactNode;
  link?: string;
}

const OverviewCard = ({ title, children, link }: OverviewCardProps) => {
  const CardComponent = (
    <Card className={'bg-neutral-900 transition-shadow hover:shadow-md'}>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  if (link) {
    return (
      <Link href={link} className='block'>
        {CardComponent}
      </Link>
    );
  }

  return CardComponent;
};
OverviewCard.displayName = 'OverviewCard';

export default OverviewCard;
