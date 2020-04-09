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
        getContent('partner')
        .then(entries => setData(entries))
        
}, [])
const array = data || []

const PartnerList = array.map( (item, i) => {
    return (
        <LinkHOC to={`partner/${item.sys.id}`} key={i}>
            <br />
            <ListItem 
                name={item.fields.partnerName} 
                email={item.fields.email}
                image={item.fields.profileImage.fields.file.url}
                introduction={item.fields.introduction}
            />
        </LinkHOC>
       
    )

}

);

  return (
    <Container >
        {PartnerList}
    </Container>
  );
}

export default Partners;
