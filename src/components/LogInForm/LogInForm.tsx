import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../api/api-client.js';
import { useUser } from '../../contexts/userContext.js'; // Импортируйте useUser
import css from '../ContactsForm/ContactsForm.module.scss';
import style from './LogIn.module.scss';

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUser(); // Используйте setUser из контекста

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const user = await logIn(email, password);
      setUser(user); // Установите пользователя в контексте
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
        <fieldset>
          <legend className={style.legend}>Connexion</legend>
          <div>
            <label className={css.form__label} htmlFor="email">Adresse email :</label>
            <input className={css.form__input} value={email} onChange={event => setEmail(event.target.value)} type="text" id="email" />
          </div>
          <div>
            <label className={css.form__label} htmlFor="password">Mot de passe :</label>
            <input className={css.form__input} value={password} onChange={event => setPassword(event.target.value)} type="password" id="password" />
          </div>
          <div>
            <button className={style.button} type="submit">Se connecter</button>  
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LogInForm;
