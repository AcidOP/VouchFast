'use client';

// import emailAuthAction from '@/actions/auth.email';
import Button from '@/components/ui/button';
import Input from '@/components/ui/input';
import Label from '@/components/ui/label';

import type { FormEvent } from 'react';

interface IProps {
  buttonText: string;
}

const EmailAuth = ({ buttonText }: IProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    // void emailAuthAction(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor='email'>Email</Label>
      <Input
        type='email'
        id='email'
        name='email'
        className='mt-2'
        placeholder='Email Address'
      />
      <Button className='mt-5 w-full text-xl'>{buttonText}</Button>
    </form>
  );
};

export default EmailAuth;
