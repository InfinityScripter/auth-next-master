import CardWrapper from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel='Login. Welcome back!'
      backButtonLabel='Don`t have an account ? Register'
      backButtonHref='/auth/register'
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
