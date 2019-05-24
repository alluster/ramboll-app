import React from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from '../components/Container';
const Dashboard = () =>  {
  return (
    <Container>
        <h1>Welcome to Ramboll Expertice Management Platform</h1>
        <h3>Here we combine all expertice in Ramboll with extrenal partners</h3>
        <h4>How does it work?</h4>
        <p>1. As a Ramboll employee you create a profile where you list and state your expertice</p>
        <p>2. As an external company you create a profile where you state your offering</p>
        <p>3. As a project manager you find the best know-how for your current project with the help of AI</p>

            <br/>
            <button className="btn btn-primary btn-lg" >Join the platform </button>
    

    </Container>
  
     
  );
}

export default Dashboard;
