import React from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Home = () =>  {
  return (
    <div className="home">
  
      <header className="home-header">
      <h1>Ramboll Team Building App</h1>
      <h3>Building teams for complex projects with specific competence.</h3>
        <button className="btn btn-primary" >Join the platform </button>
  
      </header>
    </div>
  );
}

export default Home;
