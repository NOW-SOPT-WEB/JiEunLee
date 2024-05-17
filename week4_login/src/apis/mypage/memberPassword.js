import axios from 'axios';

// 로그인 API 함수
export const memberPassword = async (requestBody, { headers }) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/member/password`,
      requestBody,
      { headers }
    );
    return response;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    }
  }

  return response;
};
