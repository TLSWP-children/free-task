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
import { isNotEmpty, useForm } from '@mantine/form';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },
    validate: {
      login: isNotEmpty('Enter your login'),
      password: isNotEmpty('Enter your password'),
    },
  });
  const [login, { isSuccess }] = useLoginMutation();
  if (isSuccess) router.push('/');
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
