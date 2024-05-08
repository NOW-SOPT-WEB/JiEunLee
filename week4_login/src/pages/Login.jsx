import React from 'react';
import styled from '@emotion/styled';

function Home() {
  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <img src='../src/assets/images/login.jpeg' width={120} alt='login' />
        <Input placeholder='아이디'></Input>
        <Input placeholder='비밀번호'></Input>
        <BtnContainer>
          <Button>로그인</Button>
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
const Input = styled.input`
  width: 15rem;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.darkBeige};
  border-radius: 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPink};
  border-radius: 10px;
  width: 6rem;
  height: 2rem;
`;
