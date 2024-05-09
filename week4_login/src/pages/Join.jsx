import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';

function Join() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const requestBody = {
      authenticationId: id,
      password: pw,
      nickname: nickname,
      phone: phone,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/member/join`,
        requestBody
      );
      if (response.status === 201 || response.status === 200) {
        alert('회원가입이 성공했습니다.');
      } else {
        setMessage('회원가입 실패');
      }
    } catch (error) {
      if (error.response) {
        setMessage(
          error.response.data.message || '회원가입 중 알 수 없는 오류 발생'
        );
        alert(
          error.response.data.message || '회원가입 중 알 수 없는 오류 발생'
        );
      } else {
        setMessage('서버에 연결할 수 없습니다.');
        alert(
          error.response.data.message || '회원가입 중 알 수 없는 오류 발생'
        );
      }
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Title>회원가입</Title>
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
        <Input
          placeholder='닉네임'
          type='text'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Input
          placeholder='전화번호'
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <BtnContainer>
          <Button type='submit'>회원가입</Button>
          <Button type='button'>뒤로가기</Button>
        </BtnContainer>
        {message && <Message>{message}</Message>}
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Form = styled.form`
  gap: 2rem;
  display: flex;
  width: 50vw;
  height: 70vh;
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

const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
`;

export default Join;
