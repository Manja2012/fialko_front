import { useState, useEffect } from 'react';
import { useUser } from '../../contexts/userContext';
import { getAllReservationByUser } from '../../api/api-client.js'
import { Link } from "react-router-dom";
import CourseCard from '../../components/Course/CourseCard.js'
import style from './UserPage.module.scss'

const UserPage = () => {
  const [reservation, setReservation] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchMyReservation = async () => {
      try {
        const data = await getAllReservationByUser();
        console.log(data);
        setReservation(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyReservation();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }
 
  return (
    <div className="container">
      <section className='section'>
        <h1 className={style.title}>Mon compte</h1>
        <p className={style.text}>Bienvenue, {user.email}!</p>
        <ul>
          {reservation?.map((reserv, id) => (
            <li key={id}>
              <CourseCard
                id={reserv.course._id}
                name={reserv.course.name}
                content={reserv.course.content}
                category={reserv.course.category}
                picture={reserv.course.picture}
                price={reserv.course.price}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserPage;
