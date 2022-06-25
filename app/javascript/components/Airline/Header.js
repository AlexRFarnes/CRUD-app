import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;

  img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 60px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;
const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`;

const Header = ({
  attributes: { name, image_url, avg_score },
  totalReviews,
}) => {
  return (
    <Wrapper>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <div>
        <TotalReviews>{totalReviews} User Reviews</TotalReviews>
        <div className='starRating'></div>
        <TotalOutOf>{avg_score} out of 5</TotalOutOf>
      </div>
    </Wrapper>
  );
};

export default Header;
