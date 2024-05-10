import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import { memberPassword } from '../../apis/mypage/memberPassword';

function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const { memberId } = useParams();

  const headers = {
    memberId: memberId,
  };
  const requestBody = {
    previousPassword: oldPassword,
    newPassword: newPassword,
    newPasswordVerification: checkPassword,
  };

  /** 비밀번호 변경 patch */
  const changePassword = async () => {
    if (!oldPassword || !newPassword || !checkPassword) {
      alert('모든 비밀번호 필드를 채워주세요.');
      return;
    } else {
      try {
        const response = await memberPassword(requestBody, { headers });
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
  );
}

export default ChangePasswordForm;
