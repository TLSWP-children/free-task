import { UserButton, useMeQuery } from '@/entities/user';

export const NavbarUserButton = () => {
  const { data, isSuccess } = useMeQuery();
  if (!isSuccess) return 'Is Not Success';
  return (
    <UserButton
      image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
      name={data.login}
      email={data.email}
    />
  );
};
