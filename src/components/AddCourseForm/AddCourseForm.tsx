import { useState } from 'react'
import { addCourse } from '../../api/api-client.js'
import css from './AddCourseForm.module.scss';
// import { useUser } from "../../contexts/userContext";

const AddCourseForm = () => {

  const [course,setCourse]= useState({})
  // const { user } = useUser(); 

  const handleChange = (event) => {
    const { name, value } = event.target
    setCourse((course) => ({ ...course, [name]: value })) 
    console.log(course);
    // localStorage.setItem('product', JSON.stringify(product))   
  }


  
  const handleSubmit = async (event) => {
    
    event.preventDefault()
    
    try{
      const response = await addCourse({...course})
      console.log(response);
    }catch(e){
      console.log(e);
    }
  }
 
  return (
    <div className={css['log-in-form-wrapper']}>
      <form 
        onSubmit={handleSubmit}
        className={css['log-in-form']}
        autoComplete="off"
       
      >
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> name </span>
          <input className={css['log-in-input']} 
          type="text" 
          onChange={handleChange}
          name="name" />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> category </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="category"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> content</span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="content"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> price </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="price"
          />
        </label>
        <label className={css['log-in-label']}>
          <span className={css['label-span']}> picture </span>
          <input
            className={css['log-in-input']}
            type="text"
            onChange={handleChange}
            name="picture"
          />
        </label>
        <button className={css['log-in-btn']} type="submit">
         ok
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;