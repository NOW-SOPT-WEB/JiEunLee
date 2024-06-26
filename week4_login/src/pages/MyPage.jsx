import { React, useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Form from '../components/common/Form';
import ChangePasswordForm from '../components/mypage/ChangePasswordForm';
import { memberInfo } from '../apis/mypage/memberInfo';

function MyPage() {
  const [infoData, setInfoData] = useState({});
  const { memberId } = useParams();
  const [toggleChangePassword, setToggleChangePassword] = useState(false);

  const headers = {
    memberId: memberId,
  };

  /** 마이페이지 정보 get */
  useEffect(() => {
    const getMyInfo = async () => {
      try {
        const response = await memberInfo({ headers });
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

  return (
    <Form>
      <Title>마이페이지</Title>
      <Label>id: {infoData.authenticationId}</Label>
      <Label>닉네임: {infoData.nickname}</Label>
      <Label>폰 번호: {infoData.phone}</Label>
      <ChangePassword
        onClick={() => {
          setToggleChangePassword(!toggleChangePassword);
        }}
      >
        비밀번호 변경
      </ChangePassword>
      {toggleChangePassword && <ChangePasswordForm />}
      <Link to='/main'>
        <Button>홈으로</Button>
      </Link>
    </Form>
  );
}

const Label = styled.p`
  font-size: 1.5rem;
`;
const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 4rem;
`;
const ChangePassword = styled.button`
  background-color: ${({ theme }) => theme.colors.darkPink};
  border-radius: 10px;
`;

export default MyPage;
