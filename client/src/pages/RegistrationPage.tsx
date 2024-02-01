import RegisterForm from '@/components/auth/RegisterForm';
import Hero from '@/components/ui/Hero';
import { Toaster } from '@/components/ui/toaster';

const RegistrationPage = () => {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Hero />
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <RegisterForm />
            <Toaster />
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationPage;
