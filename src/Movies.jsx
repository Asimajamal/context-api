import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './context'
import './App.css';

const Movies = () => {

  const {movie, loading} =useGlobalContext();
  if (loading) {
    return (
      <div style={{textAlign:"center"}}>
        <p>Loading....</p>
      </div>
    );
  }
  return (
    <div className='Movies-container' >
    {movie.map((curMovie)=>{
      const {imdbID,Title,Poster}=curMovie
      const movieTitle=Title.substring(0,15);
      return <NavLink to={`movie/${imdbID}`} className="navlink">
        <div className='Movie-card'>
          <div className='card-info'>
             <h2>{movieTitle.length>=15 ? `${movieTitle}...` : movieTitle}</h2> 
             <img src={Poster} alt="Img" />
          </div>
        </div>
      </NavLink>
        
      
    }
    )}
  </div>
  )
}

export default Movies
