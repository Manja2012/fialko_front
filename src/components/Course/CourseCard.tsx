import { Link } from "react-router-dom";
import style from './CourseCard.module.scss'

const CourseCard = ({ id, name, content, category, picture, price }) => {
  
  const pictureUrl = "http://localhost:3001/" + 'temp/';

  return (
    <div className="flex">
      <div className={style.card__block}>
        <img
          className={style.card__image}
          src={`${pictureUrl}${picture}`}
          alt={name}
        />
      </div>
      <div className={style.card__block}>
        <h2 className={style.card__title}>{name}</h2>
        <p className={style.card__text}>{content}</p>
        <p className={style.card__text}>Category: {category}</p>
        <div className={style.card__text}>prix : {price}$</div>
        <Link className={style.card__link} to={`/courses/${id}`}>
          Voir plus
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
