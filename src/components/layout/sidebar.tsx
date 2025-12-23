'use client';

import { ChevronDownIcon } from 'lucide-react';

import authMenu from '@/config/auth-menu-links';

import { cn } from '@/lib/utils';

import Tab from '@/components/ui/tabs';

type AuthMenuType = typeof authMenu;

interface SidebarProps {
  className?: string;
}

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
