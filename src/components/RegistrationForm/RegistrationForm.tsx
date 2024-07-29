import { useState } from "react";
import { register } from "../../api/api-client.js";
import { useNavigate } from "react-router-dom";
import style from '../ContactsForm/ContactsForm.module.scss'

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        await register({email, password, name});
        navigate("/log-in");
      } catch (error) {
        console.error(error.message);
      }

      setName("");
      setEmail("");
      setPassword("");
    };

    return (
      <div className="container">
        <form className={style.form} autoComplete="off" onSubmit={handleSubmit}>
          <label className={style.form__label}>
            Username
            <input
              className={style.form__input}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={style.form__label}>
            Email
            <input
              className={style.form__input}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={style.form__label}>
            Password
            <input
              className={style.form__input}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={style.form__button} type="submit">
            Register
          </button>
        </form>
      </div>
    );
};
export default RegistrationForm;
