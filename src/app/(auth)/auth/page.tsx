import AuthCard from '@/components/cards/auth-card';

const Signup = () => {
  return (
    <main className='layout flex min-h-[calc(100vh-5rem)] items-center justify-center'>
      <AuthCard type='signup' />
    </main>
  );
};

export default Signup;
