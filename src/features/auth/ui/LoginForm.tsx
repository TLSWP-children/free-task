import { useLoginMutation } from '@/entities/session';
import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Paper,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { redirect } from 'next/navigation';

const LoginForm = () => {
  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },
  });
  const [login, { isSuccess }] = useLoginMutation();
  if (isSuccess) redirect('/');
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(login)}>
        <TextInput
          label="Login"
          placeholder="Your login"
          required
          {...form.getInputProps('login')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          {...form.getInputProps('password')}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button type="submit" fullWidth mt="xl">
          Sign in
        </Button>
      </form>
    </Paper>
  );
};

export { LoginForm };
