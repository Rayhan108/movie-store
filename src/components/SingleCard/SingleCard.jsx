import React from 'react';

const SingleCard = ({movie,handleWatchTime}) => {
    // console.log(movie)
    return (
        <>
             <div className="movie-card card py-5 text-center w-100 m-auto  ">
        <div className="movie-poster w-50 m-auto ">
          <img className="w-50" src={movie.poster} alt="" />
        </div>
        <h3>{movie.movieName}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
       
         <div className="timeandrating d-flex justify-content-around">
          <p>Watch time:{movie.watchTime}</p>
          <p>Rating:{movie.imdbRating}</p>
         </div>
      <button onClick={()=>handleWatchTime(movie.watchTime)} className="btn btn-info m-auto w-75">Book Now</button>
      </div>
        </>
    );
};

export default SingleCard;