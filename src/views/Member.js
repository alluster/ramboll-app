import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getEntry } from './../contentful';
import ListItem from '../components/ListItem';
import Container from '../components/Container';

const Member = (props) =>  {
    const [data, setData] = useState([]);
        useEffect(() => {
        getEntry(`${props.match.params.id}`)
        .then(entry => setData(entry))
        
}, [])

// console.log(this.props)
  return (
    <Container >
    </Container>
  );
}

export default Member;
