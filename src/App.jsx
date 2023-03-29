import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';

const App = () => {
  return (
    <>
      <Header></Header>
      <div className="main row ">
        <div className="home-container col-md-8">
          <Home></Home>
          
        </div>
        <div className="sidecart col-md-4 card py-5 mt-2">
          <SideCart></SideCart>
        </div>
      </div>
    </>
  );
};

export default App;