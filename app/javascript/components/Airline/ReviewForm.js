import React from "react";
import styled from "styled-components";
import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`;
const RatingTitle = styled.div``;

const ReviewForm = ({
  handleSubmit,
  handleChange,
  setRating,
  review,
  attributes: { name },
}) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, idx) => {
    return (
      <>
        <input
          type='radio'
          value={score}
          name='rating'
          checked={review.score == score}
          onChange={() => console.log("Selected:", score)}
          id={`rating-${score}`}
        />
        <label onClick={setRating.bind(this, score)}></label>
      </>
    );
  });
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <div>Have an experience with {name}? Share your review.</div>
        <div className='field'>
          <input
            onChange={handleChange}
            value={review.title}
            type='text'
            name='title'
            placeholder='Review Title'
          />
        </div>
        <div className='field'>
          <textarea
            onChange={handleChange}
            value={review.description}
            name='description'
            cols='30'
            rows='10'
            placeholder='Review Description'></textarea>
        </div>
        <div className='field'>
          <RatingContainer>
            <div className='ratingTitle'>Rate this Airline</div>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </div>
        <button type='submit'>Submit Your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
