import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from './src/pages/Join';
import Login from './src/pages/Login';
import Main from './src/pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/main' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
