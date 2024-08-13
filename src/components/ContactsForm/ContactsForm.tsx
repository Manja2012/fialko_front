import { StrictMode, useState } from "react";
import { sendMessage } from "../../api/api-client.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from "./ContactsForm.module.scss";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notify = () =>
    toast.error(`S'il vous plaît, remplissez le champ de texte`, {
      className: style.errorMessage,
    });
  const confirmation = () =>
    toast.success(`Votre message a été envoyé avec succès`, {
      className: style.successMessage,
    });

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    if (!message.trim()) {
      notify();
    } else {
      await sendMessage({
        email,
        name,
        phone,
        message,
      });

      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      confirmation();
    }
  };

  return (
    <StrictMode>
      <section className={style.flex}>
        <div className={style.form} id="contacts">
          <h1 className={style.title}>Contactez-nous</h1>
          <form onSubmit={handleSubmit}>
            <label className={style.form__label} htmlFor="name">
              Nom complet*
            </label>
            <input
              className={style.form__input}
              required
              type="text"
              name="name"
              id="name"
              onChange={(event) => setName(event.target.value)}
            />
            <label className={style.form__label} htmlFor="email">
              Email*
            </label>
            <input
              className={style.form__input}
              required
              type="email"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className={style.form__label} htmlFor="phone">
              Numéro de téléphone*
            </label>
            <input
              className={style.form__input}
              required
              type="tel"
              name="phone"
              id="phone"
              onChange={(event) => setPhone(event.target.value)}
            />
            <div>
              <label className={style.form__label} htmlFor="message">
                Message*
              </label>
              <textarea
                className={style.form__comment}
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <p className={style.form__text_star}>*champs obligatoire</p>
            <div>
              <button className={style.form__button}>Ok</button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer position="bottom-center" theme="dark" />
    </StrictMode>
  );
};

export default ContactsForm;
