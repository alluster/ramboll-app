import React from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LinkHOC from '../components/LinkHOC';
import Container from '../components/Container';
const Home = () =>  {
  return (
    <div className="home">
  
      <header className="home-header">
      <Container>
      <h1>Ramboll Expertise Management Platform</h1>
      <h3>Building teams for complex projects with specific competence.</h3>
        <br/>
        <LinkHOC to="/dashboard">
            <button className="btn btn-primary btn-lg" >Join the platform </button>
        </LinkHOC>
  
      </Container>

      </header>
    </div>
  );
}

export default Home;
