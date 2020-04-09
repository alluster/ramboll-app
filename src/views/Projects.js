import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getContent } from './../contentful';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import LinkHOC from '../components/LinkHOC';
import Card from '../components/Card';
const Projects = () =>  {
    const [data, setData] = useState([]);
        useEffect(() => {
        getContent('project')
        .then(entries => setData(entries))
        
}, [])
const array = data || []

const ProjectList = array.map( (item, i) => {
    return (
        <LinkHOC to={`project/${item.sys.id}`}>
            <Card 
                name={item.fields.projectName} 
                key={i}
                image={item.fields.image.fields.file.url}
                introduction={item.fields.introduction}
                id={item.sys.id}
                requirements={item.fields.requirements}
            />
        </LinkHOC>
       
    )

}
   
           
    
);
  return (
    <Container >
        {ProjectList}
    </Container>
  );
}

export default Projects;
