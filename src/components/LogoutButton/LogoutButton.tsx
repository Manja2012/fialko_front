import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/userContext';
import style from './LogoutButton.module.scss'

const LogoutButton = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/log-in'); // Перенаправление на страницу входа после выхода
  };

  return <div><button className={style.button} onClick={handleLogout}>se deconnecter|</button>
    </div>
};

export default LogoutButton;
