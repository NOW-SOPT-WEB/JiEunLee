import axios from 'axios';

// 로그인 API 함수
export const memberInfo = async ({ headers }) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/member/info`,
    { headers }
  );

  return response;
};
