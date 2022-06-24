import React from "react";

const Header = ({
  attributes: { name, image_url, avg_score },
  totalReviews,
}) => {
  return (
    <div className='wrapper'>
      <h1>
        <img src={image_url} alt={name} />
        {name}
      </h1>
      <div>
        <div className='totalReviews'>{totalReviews} User Reviews</div>
        <div className='starRating'></div>
        <div className='totalOutOf'>{avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
