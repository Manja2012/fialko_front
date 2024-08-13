import { useState, useEffect } from "react";
import {
  deleteCourse,
  getCourses,
  updateCourse,
} from "../../api/api-client.js";
import CourseCard from "../Course/CourseCard.js";
import style from "../ContactsForm/ContactsForm.module.scss";

const DeleteCourse = () => {
  const [courses, setCourses] = useState([]);
  const [currentId, setCurrentId] = useState();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [picture, setPicture] = useState(null);

  const fetchCourses = async () => {
    try {
      const { data } = await getCourses();
      setCourses(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const deleteOneCourse = async (id) => {
    await deleteCourse(id);
    await fetchCourses();
  };

  const handleSubmit = async (event, currentId) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("content", content);
      formData.append("price", price);
      formData.append("picture", picture);

      const response = await updateCourse(formData, currentId);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  const modifyCourse = async (_id) => {
    await updateCourse({ name, category, content, price, picture, _id });
    await fetchCourses();
  };
  const modify = (id) => {
    // TODO: afficher un formulaire de modification
    setCurrentId(id);
    const course = courses.find((course) => course._id === id);
    setCategory(course.category);
    setName(course.name);
    setContent(course.content);
    setPrice(course.price);
    setPicture(course.picture);
  };

  const handlePictureChange = (event) => {
    setPicture(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <>
      <main>
        <h2 className={style.title}>Liste des cours</h2>
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

              <button
                className="button"
                onClick={() => deleteOneCourse(card._id)}
              >
                Annuler
              </button>
              <button className="button" onClick={() => modify(card._id)}>
                Modifier
              </button>
            </li>
          ))}
        </ul>
      </main>
      {currentId && (
        <div>
          <div>
            <form
              onSubmit={(e) => handleSubmit(e, currentId)}
              // onSubmit={(event) => {
              //   event.preventDefault();
              //   modifyCourse(currentId);
              // }}
            >
              <label className={style.form__label}>
                name
                <input
                  className={style.form__input}
                  type="text"
                  onChange={handleNameChange}
                  name="name"
                />
              </label>
              <label className={style.form__label}>
                category
                <input
                  className={style.form__input}
                  type="text"
                  onChange={handleCategoryChange}
                  name="category"
                />
              </label>
              <label className={style.form__label}>
                content
                <input
                  className={style.form__input}
                  type="text"
                  onChange={handleContentChange}
                  name="content"
                />
              </label>
              <label className={style.form__label}>
                price
                <input
                  className={style.form__input}
                  type="text"
                  onChange={handlePriceChange}
                  name="price"
                />
              </label>
              <label className={style.form__label}>
                picture
                <input
                  className={style.form__input}
                  type="file"
                  onChange={handlePictureChange}
                  name="picture"
                />
              </label>
              <button className="button" type="submit">
                Modifier
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCourse;
