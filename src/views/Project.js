import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getEntry } from './../contentful';
import ListItem from '../components/ListItem';
import Container from '../components/Container';

const Project = (props) =>  {
    const [data, setData] = useState({});
        useEffect(() => {
        getEntry(`${props.match.params.id}`)
        .then(entry => setData(entry))
        
}, [])

console.log(data)
const project = data.fields || {}
console.log(project)
// const image = project.image.fields.file.url || ""

  return (
    <Container >
        <div className="jumbotron">
            <h1>  {project.projectName}</h1>
            <button className="btn btn-primary btn-lg" href="#" role="button">
            Create a team
            </button>
        </div>
    </Container>
  );
}

export default Project;
