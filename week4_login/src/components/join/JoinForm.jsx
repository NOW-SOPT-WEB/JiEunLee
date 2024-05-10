import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { memberJoin } from '../../apis/join/memberJoin';

function JoinForm() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [nickname, setNickname] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // 회원가입 시도
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const requestBody = {
        authenticationId: id,
        password: pw,
        nickname,
        phone,
      };
      const response = await memberJoin(requestBody);

      if (response.status === 201 || response.status === 200) {
        alert('회원가입이 성공했습니다.');
        navigate('/');
      }
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
      <InputIntro>
        비밀번호 형식: 최소 8글자 이상, 숫자, 특수문자, 영어 알파벳 포함
      </InputIntro>
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
      <InputIntro>전화번호 형식: 010-****-****</InputIntro>
      <BtnContainer>
        <Button onClick={handleSignUp}>회원가입</Button>
        <Link to='..'>
          <Button type='button'>뒤로가기</Button>
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

const InputIntro = styled.p`
  width: 22rem;
  color: blue;
`;
export default JoinForm;
