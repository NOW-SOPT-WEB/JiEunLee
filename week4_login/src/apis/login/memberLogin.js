import axios from 'axios';

// 로그인 API 함수
export const memberLogin = async (requestBody) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/member/login`,
      requestBody
    );
    return response;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    }
  }
  return response;
};
