import { RegisterForm } from '@/features/auth';
import { Anchor, Container, Text, Title } from '@mantine/core';

const Login = () => {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Create accaunt
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do have an account yet?{' '}
        <Anchor size="sm" component="button">
          Sign in
        </Anchor>
      </Text>
      <RegisterForm />
    </Container>
  );
};

export default Login;
