import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { getContent } from './../contentful';
import ListItem from '../components/ListItem';
import Container from '../components/Container';
import LinkHOC from '../components/LinkHOC';

const Partners = () =>  {
    const [data, setData] = useState([]);
        useEffect(() => {
        getContent('parter')
        .then(entries => setData(entries))
        
}, [])
const array = data || []

const PartnerList = array.map( (item, i) => {
    return (
        <LinkHOC to={`partner/${item.sys.id}`}>
            <ListItem 
                name={item.fields.partnerName} 
                key={i}
                image={item.fields.logo.fields.file.url}
                introduction={item.fields.introduction}
            />
        </LinkHOC>
       
    )

}
   
           
    
);

console.log(data)
  return (
    <Container >
        {PartnerList}
    </Container>
  );
}

export default Partners;