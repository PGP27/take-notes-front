import { Route, Routes } from 'react-router-dom';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import ForgorPassword from '~/pages/ForgorPassword';

const AuthRoutes = () => (
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgot-password' element={<ForgorPassword />} />
  </Routes>
);

export default AuthRoutes;
