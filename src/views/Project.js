import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getEntry } from './../contentful';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import LinkHOC from '../components/LinkHOC';

const Project = (props) =>  {
    const [data, setData] = useState({});
        useEffect(() => {
        getEntry(`${props.match.params.id}`)
        .then(entry => setData(entry))
        
}, [])

console.log(data)
const project = data.fields || {members: []}
console.log(project)
const members = project.members.map((member, i) => {
    return ( 
        <LinkHOC to={`member/${member.sys.id}`}>
        <br />
        <ListItem 
            name={member.fields.memberName} 
            email={member.fields.email}
            key={i}
            image={member.fields.profileImage.fields.file.url}
            introduction={member.fields.introduction}
        />
    </LinkHOC>
)
})
  return (
    <Container >
        <div className="jumbotron">
            <h1>  {project.projectName}</h1>
            
        </div>
        <p>List of project members:</p>
        {members}
        <LinkHOC to="/dashboard">
        <br />
        <button className="btn btn-primary btn-lg" href="#" role="button">
           Add a new member
            </button>

        </LinkHOC>
       
    </Container>
  );
}

export default Project;
