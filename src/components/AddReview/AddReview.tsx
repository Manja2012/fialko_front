import { useState } from 'react';
import { addReview } from '../../api/api-client.js';
import { useUser } from "../../contexts/userContext";
import style from '../ContactsForm/ContactsForm.module.scss'

const AddReview = ({ courseId, onReviewAdded }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const { user } = useUser(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Vous devez être connecté pour laisser un avis.");
      return;
    }

    try {
      await addReview({
        user: user._id,
        course: courseId,
        comment,
        rating
      });

      alert('Review submitted successfully!');
      onReviewAdded({ comment, rating, user: user._id });
      setRating(0);
      setComment('');
      
    } catch (er) {
      console.error(er.message);
      alert('Failed to submit review');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={style.form__label}>Rating:</label>
        <input
          className={style.form__input}
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label className={style.form__label}>Comment:</label>
        <textarea
          className={style.form__comment}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button className='button' type="submit">Submit Review</button>
    </form>
  );
};

export default AddReview;

