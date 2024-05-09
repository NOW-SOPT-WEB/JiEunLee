import React from 'react';
import styled from '@emotion/styled';

function Home() {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <img src='../src/assets/images/login.jpeg' width={120} alt='login' />
        <Input
          placeholder='아이디'
          type='text'
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          placeholder='비밀번호'
          type='password'
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <BtnContainer>
          <Button onClick={handleLogin}>로그인</Button>
          <Button>회원가입</Button>
        </BtnContainer>
      </Form>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Form = styled.div`
  gap: 2rem;
  display: flex;
  width: 30vw;
  height: 45vh;
  border: 1px solid ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.lightPink};
`;
const Title = styled.p`
  font-size: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
`;
