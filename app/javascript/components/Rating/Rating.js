import React from "react";
import "./Rating.css";
import "font-awesome/css/font-awesome.css";

const Rating = ({ score }) => {
  const width = (score / 5) * 100;
  return (
    <span className='starWrapper'>
      <span className='stars' style={{ width: width + "%" }}></span>
    </span>
  );
};

export default Rating;
