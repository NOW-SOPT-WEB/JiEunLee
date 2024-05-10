import { React, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

function MyPage() {
  const [infoData, setInfoData] = useState({});
  const { memberId } = useParams();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [toggleChangePassword, setToggleChangePassword] = useState(false);

  const headers = {
    memberId: memberId,
  };

  const requestBody = {
    previousPassword: oldPassword,
    newPassword: newPassword,
    newPasswordVerification: checkPassword,
  };

  /** 마이페이지 정보 get */
  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/member/info`,
          { headers }
        );
        setInfoData(response.data.data);
        console.log('조회 성공:', response.data.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      }
    };
    getMyInfo();
  }, [memberId]);

  /** 비밀번호 변경 patch */
  const changePassword = async () => {
    if (!oldPassword || !newPassword || !checkPassword) {
      alert('모든 비밀번호 필드를 채워주세요.');
      return;
    } else {
      try {
        const response = await axios.patch(
          `${import.meta.env.VITE_BASE_URL}/member/password`,
          requestBody,
          { headers }
        );
        alert(response.data.message);
        console.log('비밀번호 변경 성공:', response.data.message);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return (
    <Container>
      <Form>
        <Title>마이페이지</Title>
        id:<Id>{infoData.authenticationId}</Id>
        닉네임:<NickName>{infoData.nickname}</NickName>폰 번호:
        <Phone>{infoData.phone}</Phone>
        <ChangePassword
          onClick={() => {
            setToggleChangePassword(!toggleChangePassword);
            console.log(toggleChangePassword);
          }}
        >
          비밀번호 변경
        </ChangePassword>
        {toggleChangePassword && (
          <>
            <Input
              placeholder='기존 비밀번호'
              type='password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <Input
              placeholder='새로운 비밀번호'
              type='password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <Input
              placeholder='비밀번호 확인'
              type='password'
              value={checkPassword}
              onChange={(e) => setCheckPassword(e.target.value)}
            />
            <Button onClick={changePassword}>비밀번호 변경</Button>
          </>
        )}
        <Link to='/main'>
          <Button>홈으로</Button>
        </Link>
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

const Form = styled.div`
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
const Id = styled.p`
  font-size: 2rem;
`;
const NickName = styled.p`
  font-size: 2rem;
`;
const Phone = styled.p`
  font-size: 2rem;
`;
const Title = styled.p`
  font-size: 2rem;
`;
const ChangePassword = styled.button`
  background-color: ${({ theme }) => theme.colors.darkBeige};
`;

export default MyPage;
