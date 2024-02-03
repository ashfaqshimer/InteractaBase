import LoginForm from '@/components/auth/LoginForm';
import Hero from '@/components/ui/Hero';

const LoginPage = () => {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Hero />
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm text-muted-foreground">
                Enter your login credentials to sign in.
              </p>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
