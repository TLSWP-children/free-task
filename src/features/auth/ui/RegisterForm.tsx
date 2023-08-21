import { useLoginMutation, useRegisterMutation } from '@/entities/session';
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
import { useRouter } from 'next/router';

const RegisterForm = () => {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: '',
      login: '',
      password: '',
      passwordConfirm: '',
    },
  });
  const [register, { isSuccess }] = useRegisterMutation();
  if (isSuccess) router.push('/');
  return (
    <Paper withBorder shadow="md" p={30} mt={30} radius="md">
      <form onSubmit={form.onSubmit(register)}>
        <TextInput
          label="Email"
          placeholder="Your email"
          required
          {...form.getInputProps('email')}
        />
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
        <PasswordInput
          label="Confirm password"
          placeholder="Repeat your password"
          required
          mt="md"
          {...form.getInputProps('passwordConfirm')}
        />
        <Group position="apart" mt="lg">
          <Checkbox label="Accept" />
        </Group>
        <Button type="submit" fullWidth mt="xl">
          Sign up
        </Button>
      </form>
    </Paper>
  );
};

export { RegisterForm };
