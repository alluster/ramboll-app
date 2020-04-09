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
const partner = data.fields || { competences: [] }
const skillMap = partner.competences.map((competence, i) => {
    return ( 
    <h1 key={competence}> <span class="label label-primary">{competence}</span></h1>
)
})

  return (
    <Container >
        <div class="page-header">
            <h1>{partner.partnerName} <small>{partner.introduction}</small></h1>
        </div>
        {skillMap}
       
    </Container>
  );
}

export default Project;
