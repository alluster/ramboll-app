import React, { useState, useEffect } from 'react';
import LinkHOC from '../LinkHOC';

const ListItem = (props) => {

	

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
  </div>
</div>


  )
}


  
export default ListItem;
