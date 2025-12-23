'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

type TabType = {
  name: string;
  icon: IconType | LucideIcon;
  url: string;
};

const Tab = ({ name, icon, url }: TabType) => {
  const pathname = usePathname();

  const Icon = icon;
  const isActive = pathname === url;

  return (
    <Link
      href={url}
      className={cn(
        'flex max-w-48 items-center gap-5 rounded px-4 py-2 text-base text-gray-400',
        isActive && 'bg-accent text-white',
      )}
    >
      <Icon className='text-primary text-xl' />
      {name}
    </Link>
  );
};
Tab.displayName = 'SidebarTab';

export default Tab;
