import PhotoAdmin from '../../images/profil-2.jpg'
import style from './AboutMePage.module.scss'
const AboutMePage = () => {
  return (
    <main>
      <div className="container">
        <section className="section border">
          <h2 className={style.card__title2}>A propos de moi</h2>
          <div className={style.card}>
            <div className={style.card__block}>
              <h1 className={style.card__title}>Maria Fialko</h1>
              <p className={style.card__description}>
                coiffeur-styliste-coloriste
              </p>
              <p className={style.card__text}>
                Lorem ipsum dolor sit amet consectetur. In egestas rhoncus in
                diam ultricies massa pulvinar vitae amet. Non a urna volutpat
                sollicitudin fermentum. Vivamus netus neque quis sed amet mauris
                laoreet praesent. Mauris non justo non blandit ultrices pretium
                quam.
              </p>
            </div>
            <div className={style.card__image_div}>
              <img
                className={style.card__image}
                src={PhotoAdmin}
                alt="photo admin"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutMePage;
