import React from "react";

const Cards = () => {
  return (
    <div>
 <div className="movie-card card py-5 text-center w-100 m-auto ">
        <div className="movie-poster w-50 m-auto ">
          <img className="w-50" src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg" alt="" />
        </div>
        <h3>Dark</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
       
         <div className="timeandrating d-flex justify-content-around">
          <p>Watch time:</p>
          <p>Rating:</p>
         </div>
      <button className="btn btn-info m-auto w-75">Book Now</button>
      </div>
    </div>
  );
};

export default Cards;
