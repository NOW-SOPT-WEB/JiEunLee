import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './src/pages/Join';
import Login from './src/pages/Login';
import Main from './src/pages/Main';
import MyPage from './src/pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/main/:id' element={<Main />}></Route>
        <Route path='/mypage/:memberId' element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
