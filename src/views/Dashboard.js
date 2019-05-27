import React, { useState, useEffect } from 'react';
import Nav from './../components/Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from '../components/Container';
import { getContent } from './../contentful';
import LinkHOC from '../components/LinkHOC';
import ListItem from '../components/ListItem';

const Dashboard = () =>  {
  const [members, setData] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
  getContent('member')
  .then(members => {
      getContent('parter').then(partners => {
          setData(members.concat(partners))
      })
  })


  
}, [])
let filtered_items = members.map(x => ({obj: x, json: JSON.stringify(x)})).filter(x => x.json.indexOf(value) != -1).map(x => x.obj);

const searchList = filtered_items.map( (item, i) => {
  return (
      <LinkHOC to={`${item.sys.contentType.sys.id}/${item.sys.id}`}>
      <br />
          <ListItem 
              name={item.fields.name} 
              key={i}
              image={item.fields.profileImage.fields.file.url}
              introduction={item.fields.introduction}
              competences={item.fields.competences}
          />
      </LinkHOC>
     
  )

})
 
  return (
		<Container>
			<h1>Ramboll ExpertiseManagement Platform</h1>
			<h3>Search for specific competences within Ramboll Partner network and employees</h3>
			<br/>
			<div class="col-lg-6">
				<div class="input-group">
					<input type="text" class="form-control" 
						value={value}
						onChange={e => setValue(e.target.value)}
						placeholder="Search by a competence" />
						<span class="input-group-btn">
							<button class="btn btn-default" type="button">Search</button>
						</span>
				</div>
			</div>
			{searchList}
		</Container>
  
     
  );
}

export default Dashboard;
