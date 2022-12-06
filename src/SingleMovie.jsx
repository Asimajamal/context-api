import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { api_url } from "./context";
const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const [movie, setMovie] = useState("");

  const getData = async (url) => {
    try {
      const data = await fetch(url);
      const json_data = await data.json();
      console.log(json_data);
      if (json_data.Response === "True") {
        setLoading(false);
        setMovie(json_data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getData(`${api_url}&i=${id}`);
    }, 500);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading....</h1>
      </div>
    );
  }
  return (
    <div className="SingleMovie-Container">
      <div className="singleMovie-image">
        <img src={movie.Poster} alt="" />
      </div>
      <div className="movie-card">
        <h4>{movie.Title}</h4>
        <p>Release Date =>{movie.Released}</p>
        <p>Type =>{movie.Genre}</p>
        <p>Rating=> {movie.imdbRating}(10)</p>
        <p>Country =>{movie.Country}</p>
        <div className="back"><NavLink className=" back-btn" to="/">
          Go Back
        </NavLink></div>
      </div>
    </div>
  );
};

export default SingleMovie;
