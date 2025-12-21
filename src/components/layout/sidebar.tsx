'use client';

import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import authMenu from '@/config/auth-menu-links';

import { cn } from '@/lib/utils';

import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';

type AuthMenuType = typeof authMenu;

interface SidebarProps {
  className?: string;
}

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

const Sidebar = ({ className }: SidebarProps) => {
  const groupedDropdowns = getDropdownMenus(authMenu);

  return (
    <div className={cn('sticky top-24 h-min', className)}>
      <ul className='flex flex-col gap-2 text-xl font-medium text-white'>
        {authMenu.map(tab => {
          return tab.dropdown ? null : <Tab key={tab.name} {...tab} />;
        })}
      </ul>
      <hr className='my-4 max-w-48 border-gray-600' />
      <ul>
        {groupedDropdowns.map(dropdown => {
          return (
            <details key={dropdown.name} className='custom-details max-w-48 rounded'>
              <summary className='hover:bg-accent flex items-center justify-between rounded py-2 pr-2 pl-4 text-base text-gray-400'>
                {dropdown.name}
                <ChevronDownIcon className='text-primary text-xl' />
              </summary>

              {dropdown.items.map(item => {
                return <Tab key={item.url} {...item} />;
              })}
            </details>
          );
        })}
      </ul>
    </div>
  );
};

const getDropdownMenus = (menu: AuthMenuType) => {
  const dropdownMap: Record<string, Omit<AuthMenuType[number], 'dropdown'>[]> = {};

  menu.forEach(item => {
    if (item.dropdown) {
      dropdownMap[item.dropdown] ??= [];

      const { dropdown: _dropdown, ...rest } = item;
      // Remove the dropdown key
      dropdownMap[item.dropdown].push(rest);
    }
  });

  // Convert the map into an array
  return Object.entries(dropdownMap).map(([key, items]) => ({
    name: key,
    items,
  }));
};

export default Sidebar;
