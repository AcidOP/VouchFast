'use client';

import Link from 'next/link';

import SignoutButton from './signout-btn';

import authMenu from '@/config/auth-menu-links';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Button from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import type { User } from 'better-auth';

interface IProps {
  user: User;
}

const AuthMenu = ({ user }: IProps) => {
  return (
    <main className='flex items-center space-x-5'>
      <Link href='/dashboard'>
        <Button variant='default' className='hidden md:inline-flex'>
          Dashboard
        </Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className='cursor-pointer'>
            <AvatarImage src={user.image || undefined} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='mt-1 rounded' align='end'>
          <div className='flex items-center justify-start gap-2 p-2'>
            <div className='flex flex-col space-y-1 leading-none'>
              {user.name && <p className='font-medium'>{user.name}</p>}
              {user.email && (
                <p className='text-muted-foreground w-50 truncate text-sm'>
                  {user.email}
                </p>
              )}
            </div>
          </div>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>My Account</DropdownMenuLabel>

          <DropdownMenuGroup className='mt-2'>
            {authMenu.map(tab => {
              const Icon = tab.icon;
              return (
                <Link href={tab.url} key={tab.url}>
                  <DropdownMenuItem className='cursor-pointer'>
                    <Icon className='text-primary mr-2 ml-1' />
                    {tab.name}
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuGroup>

          <SignoutButton />
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  );
};

export default AuthMenu;
