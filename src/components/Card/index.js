import React, { useState, useEffect } from 'react';
import LinkHOC from '../LinkHOC';

const Card = (props) => {
	return (
        <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src={props.image} alt="..." />
            <div class="caption">
                <h3>{props.name}</h3>
                <p>{props.introduction}</p>
                <p><LinkHOC to={`/project/${props.id}`}><a  class="btn btn-primary" role="button">View project</a> </LinkHOC></p>
            </div>
            </div>
        </div>
        </div>
  )
}

  
export default Card;
