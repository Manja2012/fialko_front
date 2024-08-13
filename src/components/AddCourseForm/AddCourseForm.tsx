import { useState } from 'react'
import { addCourse } from '../../api/api-client.js'
import style from '../ContactsForm/ContactsForm.module.scss';
// import { useUser } from "../../contexts/userContext";

const AddCourseForm = () => {

  // const [course, setCourse] = useState({})
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [content, setContent] = useState('')
  const [price, setPrice] = useState('');
  const [picture, setPicture] = useState(null);
  // const { user } = useUser();

  // const handleChange = (event) => {
  //   const { name, value } = event.target
  //   setCourse((course) => ({ ...course, [name]: value }))
  //   console.log(course);
  //   // localStorage.setItem('product', JSON.stringify(product))
  // }
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
  
  const handleSubmit = async (event) => {
    
    event.preventDefault()
    
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("category",category);
      formData.append("content",content);
      formData.append("price",price);
      formData.append("picture", picture );
      
      const response = await addCourse(formData)
      console.log(response);
     
    }catch(e){
      console.log(e);
    }
  }
 
  return (
    <div className="container">
      <section className="section">
        <h1 className={style.title}> Ajouter un cours</h1>
        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
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
            ajouter un cours
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddCourseForm;
