import { useState } from "react";
import css from "./RegistrationForm.module.scss";
import { register } from "../../api/api-client.js";
import { useNavigate } from "react-router-dom";

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
      <div className={css["registration-form-wrapper"]}>
        <form
          className={css["registration-form"]}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <label className={css["registration-form-label"]}>
            <span className={css["label-span"]}>Username</span>
            <input
              className={css["registration-form-input"]}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className={css["registration-form-label"]}>
            <span className={css["label-span"]}>Email</span>
            <input
              className={css["registration-form-input"]}
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={css["registration-form-label"]}>
            <span className={css["label-span"]}>Password</span>
            <input
              className={css["registration-form-input"]}
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className={css["registration-form-btn"]} type="submit">
            Register
          </button>
        </form>
      </div>
    );
};
export default RegistrationForm;
