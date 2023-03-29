import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";


const Home = () => {
  const [movies,setMovies] =useState([])
useEffect(()=>{
  fetch("data.json")
  .then(res=>res.json())
  .then(data=>setMovies(data))
},[])
// console.log(movies)
  return (
    <>
      <div className="movie-container">
      {
        movies.map(movie=><SingleCard movie={movie}></SingleCard>)
      }
      </div>
    </>
  );
};

export default Home;
