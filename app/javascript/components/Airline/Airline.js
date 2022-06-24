import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({
    title: "",
    description: "",
    score: 0,
  });
  const [loaded, setLoaded] = useState(false);

  let { slug } = useParams();

  useEffect(() => {
    // /api/v1/airlines/united-airlines
    const url = `/api/v1/airlines/${slug}`;
    axios
      .get(url)
      .then(resp => {
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch(resp => console.log(resp));
  }, []);

  return (
    <div className='wrapper'>
      <div className='column'>
        {loaded && (
          <Header
            attributes={airline.data.attributes}
            totalReviews={airline.included.length}
          />
        )}
        <div className='reviews'></div>
      </div>
      <div className='column'>
        <div className='review-form'>[Review form goes here.] </div>
      </div>
    </div>
  );
};

export default Airline;
