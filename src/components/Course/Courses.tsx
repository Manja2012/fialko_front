import { useState, useEffect } from "react";
import CourseCard from "../../components/Course/CourseCard";
import { getCourses } from "../../api/api-client";
import style from "./CourseCard.module.scss";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await getCourses();
        console.log(data)
        setCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <section className="container section">
      <h2 className={style.card__title2}>nos cours</h2>
      <ul className={style.card__list}>
        {courses.map((card) => (
          <li className={style.card__item} key={card._id}>
            <CourseCard
              id={card._id}
              name={card.name}
              content={card.content}
              category={card.category}
              picture={card.picture}
              price={card.price}
              showMore={true}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
