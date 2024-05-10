import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Button from '../components/Button';
import Input from '../components/Input';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [message, setMessage] = useState('');
  const [memberId, setMemberId] = useState(null);
  const navigate = useNavigate();

  const requestBody = {
    authenticationId: id,
    password: pw,
  };

  /** 로그인 시도 */
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/member/login`,
        requestBody
      );

      const headersMemberId = response.headers['location'];
      if (headersMemberId) {
        setMemberId(headersMemberId);
        console.log(headersMemberId);
      }

      console.log('로그인 성공:', response.data);
      setMessage('로그인 성공');
      // 메인페이지로 이동
      // navigate('/main');
      // // 멤버 아이디의 마이페이지로 이동
      navigate(`/mypage/${headersMemberId}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        alert(error.response.data.message);
      }
    }
  };

  return (
    <Container>
      <Form>
        <Title>로그인</Title>
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
          <Link to='/join'>
            <Button>회원가입</Button>
          </Link>
        </BtnContainer>
        {message && <Message>{message}</Message>}
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
  gap: 3rem;
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
