import axios from 'axios';

// 회원가입 API 함수
export const memberJoin = async (requestBody) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/member/join`,
      requestBody
    );
    return response;
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
    }
  }
};
