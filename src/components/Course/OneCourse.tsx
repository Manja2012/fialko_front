import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCourseById, createReservation, checkReservation } from "../../api/api-client.js";
import style from "./CourseCard.module.scss";
import { useUser } from "../../contexts/userContext"; 
import AddReview from "../../components/AddReview/AddReview.js";
import CourseCard from "./CourseCard.js";

const OneCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [hasReserved, setHasReserved] = useState(false);
  const { user } = useUser(); 
  

  useEffect(() => {
    fetchCourse();
    fetchReservationStatus();
  }, []);

  const fetchCourse = async () => {
    try {
      const { data } = await getCourseById(id);
      setCourse(data);
    } catch (error) {
      console.error("Échec de la récupération du cours:", error);
    }
  };

  const fetchReservationStatus = async () => {
    if (user) {
      try {
        const reservationStatus = await checkReservation(id);
        setHasReserved(reservationStatus);
      } catch (error) {
        console.error("Échec de la vérification de la réservation :", error);
      }
    }
  };

  const handleReservation = async () => {
    if (!isAgreed) {
      alert("Vous devez accepter les termes de la réservation");
      return;
    }

    if (!user) {
      alert("Vous devez être connecté pour faire une réservation.");
      return;
    }

    try {
      await createReservation({
        user: user._id,
        course: id,
      });
      alert("La réservation a réussi!");
      setIsModalOpen(false);
      setHasReserved(true);
    } catch (error) {
      console.error("La réservation a échoué :", error);
      alert("La réservation a échoué.");
    }
  };

  const handleReviewAdded = (newReview) => {
    setCourse((prevCourse) => ({
      ...prevCourse,
      review: [...prevCourse.review, newReview]
    }));
    fetchReservationStatus(); // Met à jour l'état de la réservation après l'ajout d'un avis
  };

  if (!course) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <main className="container section">
        <div className={style.card__item}>
          <h1 className={style.card__title}>{course.name}</h1>
          <img
            className={style.card__image}
            src={`${"http://localhost:3001/temp/"}${course.picture}`}
            alt={course.name}
          />
          <p className={style.card__text}>{course.content}</p>
          <p className={style.card__text}>Catégorie: {course.category}</p>
          <h3 className={style.card__review}>Reviews</h3>
          <ul>
            {course.review.map((review, index) => (
              <li className={style.card__item} key={index}>
                {review.comment}
                {review.rating}
              </li>
            ))}
          </ul>

          <button className="button" onClick={() => setIsModalOpen(true)}>
            Reserve
          </button>

          {user && hasReserved && (
            <AddReview courseId={id} onReviewAdded={handleReviewAdded} />
          )}

          {isModalOpen && (
            <div className={style.modal}>
              <div className={style.modalContent}>
                <h2 className={style.card__title}>
                  Confirmez votre réservation
                </h2>
                <div className={style.courseCard}>
                  <h3 className={style.card__title}>{course.name}</h3>
                  <img
                    src={`${"http://localhost:3001/temp/"}${course.picture}`}
                    alt={course.name}
                  />
                  <p>{course.content}</p>
                  <p>Catégorie: {course.category}</p>
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={isAgreed}
                    onChange={(e) => setIsAgreed(e.target.checked)}
                  />
                  J'accepte de réserver ce cours
                </label>
                <button onClick={handleReservation}>
                  Confirmez votre réservation
                </button>
                <button onClick={() => setIsModalOpen(false)}>Annuler</button>
              </div>
            </div>
          )}
        </div>
      </main>
      {/* <CourseCard/> */}
    </>
  );
};

export default OneCourse;