import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseCard from "../../components/Course/CourseCard";

const Panier = () => {
  const [courses, setCourses] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    setCourses(cart ?? []);
    setTotal(cart?.reduce((acc, curr) => acc + curr.price, 0) ?? 0);
  }, []);

  //  const notify = () =>
  //    toast.error(`S'il vous plaît, remplissez le champ de texte`, {
  //      className: style.errorMessage,
  //    });

  const handleRemoveCourse = (courseId) => {
    const updatedCourses = courses.filter(
      (course, index) => index !== courseId
    );
    // console.log(updatedCourses);
    // Обновляем состояние courses
    setCourses(updatedCourses);
    // Пересчитываем общую стоимость
    setTotal(updatedCourses.reduce((acc, curr) => acc + curr.price, 0));
    // Сохраняем обновленный список курсов в localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCourses));
  };

  return (
    <>
      <div className="container">
        <ul className="section">
          {courses.map((card, index) => (
            <li key={index}>
              <CourseCard
                id={card.id}
                name={card.name}
                content={card.content}
                category={card.category}
                picture={card.picture}
                price={card.price}
              />
              <button className="button" onClick={() => handleRemoveCourse(index)}>
                Retirer du panier
              </button>
            </li>
          ))}
        </ul>
        <p>Coût total : {total} €</p>
      </div>
      <Link className="link" to="/paiement">
        <button className="button">Payer</button>
      </Link>
    </>
  );
};

export default Panier;
