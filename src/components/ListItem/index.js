import React, { useState, useEffect } from 'react';
import LinkHOC from '../LinkHOC';

const ListItem = (props) => {
const competences = props.competences || []
	const skillMap = competences.map((competence, i) => {
    return ( 
    <p key={competence}> <span class="label label-primary">{competence}</span></p>
)
})

	return (
        
<div class="media">
  <div class="media-left media-middle">
    <a href="#">
      <img class="media-object profile-image" height="120"src={props.image} alt="..."/>
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading bold">{props.name}</h4>
    <p>{props.introduction}</p>
    <p>{props.email}</p>
    {skillMap}
  </div>
</div>


  )
}


  
export default ListItem;
