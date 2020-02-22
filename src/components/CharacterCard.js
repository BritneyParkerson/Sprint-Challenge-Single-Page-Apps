import React from 'react';

const Characters = (props) => {
	return (
		<div>
			<h1>Character Information</h1>
      <img src={props.url}/>
      <h1>Name: {props.name}</h1>
      <h2>Gender: {props.gender}</h2>
      <h3>Status: {props.status}</h3>
		</div>
	);
};
export default Characters;
