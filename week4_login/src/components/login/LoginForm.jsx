import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

function LoginForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState(0);

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
      navigate(`/mypage/${headersMemberId}`);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        alert(error.response.data.message);
      }
    }
  };
  return (
    <>
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
    </>
  );
}
const BtnContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
`;
export default LoginForm;
