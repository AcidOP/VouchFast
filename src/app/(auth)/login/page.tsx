import AuthCard from '@/components/cards/auth-card';

const Login = () => {
  return (
    <main className='layout flex min-h-[calc(100vh-5rem)] items-center justify-center'>
      <AuthCard type='login' />
    </main>
  );
};

export default Login;
