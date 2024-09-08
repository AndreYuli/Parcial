import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { ButtonsLogin } from '../components/ButtonsLogin';

export const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container_principal">
      <ButtonsLogin onClick={handleLogin} />
    </div>
  );
};

export default Login;
