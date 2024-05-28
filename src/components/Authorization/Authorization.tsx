import { NavLink } from 'react-router-dom';
import style from './Authorization.module.scss';

const Authorization = () => {
  const navLinkClassName = ({ isActive }) =>
    isActive ? style['active'] : style['nav-link'];

  return (
    <nav className={style.navigation}>
      <NavLink className={navLinkClassName} to="/register">
        Register
      </NavLink>
      <NavLink className={navLinkClassName} to="/log-in">
        Log In
      </NavLink>
    </nav>
  );
};

export default Authorization;