import React from 'react';


const Characters = (props) => {
	return (
	<div>	
      <img src={props.image}/>  
	  <h1>Name: {props.name}</h1>		     
      <h2>Gender: {props.gender}</h2>
      <h2>Status: {props.status}</h2>
		</div>
	);
};
export default Characters;
