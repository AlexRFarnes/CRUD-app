import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;

  &:last-child {
    background: #000;
  }
`;
const HeaderWrapper = styled.div`
  padding-left: 50px;
`;

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

  const handleChange = e => {
    e.preventDefault();
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

    const airline_id = airline.data.id;

    axios
      .post(
        "/api/v1/reviews",
        { ...review, airline_id },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(resp => {
        const included = [...airline.included, resp.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch(resp => {
        console.log(resp);
      });
  };

  const setRating = (score, e) => {
    e.preventDefault();

    setReview({ ...review, score });
  };

  return (
    <Wrapper>
      {loaded && (
        <>
          <Column>
            <HeaderWrapper>
              <Header
                attributes={airline.data.attributes}
                totalReviews={airline.included.length}
              />

              <div className='reviews'></div>
            </HeaderWrapper>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
};

export default Airline;
