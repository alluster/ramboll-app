import React, { useState, useEffect } from 'react';
import LinkHOC from '../LinkHOC';

const ListItem = (props) => {
const competences = props.competences || []
	const skillMap = competences.map((competence, i) => {
    return ( 
    <p key={i}> <span class="label label-primary">{competence}</span></p>
)
})

	return (
        
<div className="media">
  <div className="media-left media-middle">
      <img className="media-object profile-image" height="120"src={props.image} alt="..."/>
  </div>
  <div className="media-body">
    <h4 className="media-heading bold">{props.name}</h4>
    <p>{props.introduction}</p>
    <p>{props.email}</p>
    {skillMap}
  </div>
</div>


  )
}


  
export default ListItem;
