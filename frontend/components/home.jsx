import React from 'react';
import NavContainer from './nav/nav_container';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';

const Home = () => {

  return (

    <div className="homeBackground">

      <NavContainer />
      <div className="home_content">
        <h1 className="home_header">Find inpiration and discover the world through gorgeous photos</h1>
        <h3 className="home_p">Share you vision with the world</h3>
        <div className="home_link">
        <Link  to="/signup"><button className="home_button">Join 360px</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
