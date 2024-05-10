import React from 'react';
import styled from '@emotion/styled';

import Container from '../components/common/Container';
import Form from '../components/common/Form';
import LoginForm from '../components/login/LoginForm';

function Login() {
  return (
    <Container>
      <Form>
        <Title>로그인</Title>
        <img src='../src/assets/images/login.jpeg' width={120} alt='login' />
        <LoginForm />
      </Form>
    </Container>
  );
}

const Title = styled.p`
  font-size: 2rem;
`;

export default Login;
