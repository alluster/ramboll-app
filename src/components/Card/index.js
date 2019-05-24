import React, { useState, useEffect } from 'react';
import LinkHOC from '../LinkHOC';

const Card = (props) => {

    const requirements = props.requirements || []
	const skillMap = requirements.map((competence, i) => {
        return ( 
        <p key={competence}> <span class="label label-primary">{competence}</span></p>
    )
    })
	return (
        <div class="row">
        <div class="col-sm-6 col-md-4">
            <div class="thumbnail">
            <img src={props.image} alt="..." />
            <div class="caption">
                <h3>{props.name}</h3>
                <p>{props.introduction}</p>
                <p>Project requirements:</p>
                {skillMap}
            </div>
            </div>
        </div>
        </div>
  )
}

  
export default Card;
