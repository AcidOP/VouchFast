'use client';

import { createAuthClient } from 'better-auth/react';
import Link from 'next/link';

import SignoutButton from './signout-btn';

import authMenu from '@/config/auth-menu-links';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const { useSession } = createAuthClient();

const AuthMenu = () => {
  const { data: session } = useSession();
  if (!session?.user) return null;

  const user = session.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className='border-2'>
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
                <DropdownMenuItem>
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
  );
};

export default AuthMenu;
