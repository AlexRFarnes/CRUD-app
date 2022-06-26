import React, { Fragment } from "react";
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
  margin: 12px 0;
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

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 30px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
    width: 97%;
  }

  textarea {
    width: 97%;
    border-radius: 4px;
    min-height: 100px;
    order-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`;

const Wrapper = styled.div`
  background: #333;
  padding: 20px;
  height: 100vh;
  padding-top: 100px;
`;

const SubmitButton = styled.button.attrs({
  type: "submit",
})`
  color: #fff;
  background: #777;
  border: 1px solid #777;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  width: 97%;
  transition: all ease-in-out 0.1s;
  margin-top: 20px;
  text-align: center;

  &:hover {
    background: #fff;
    color: #777;
    border: 1px solid #fff;
  }
`;

const Headline = styled.div`
  padding: 20px;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
`;

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ReviewForm = ({
  handleSubmit,
  handleChange,
  setRating,
  review,
  attributes: { name },
}) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={index}>
        <input
          type='radio'
          value={score}
          name='rating'
          checked={review.score == score}
          id={`rating-${score}`}
          readOnly
        />
        <label onClick={setRating.bind(this, score)}></label>
      </Fragment>
    );
  });
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Headline>Have an experience with {name}? Share your review.</Headline>
        <Field>
          <input
            onChange={handleChange}
            value={review.title}
            type='text'
            name='title'
            placeholder='Review Title'
          />
        </Field>
        <Field>
          <textarea
            onChange={handleChange}
            value={review.description}
            name='description'
            placeholder='Review Description'></textarea>
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Rate this Airline</RatingTitle>
            <RatingBox>{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitButton type='submit'>Submit Your Review</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default ReviewForm;
