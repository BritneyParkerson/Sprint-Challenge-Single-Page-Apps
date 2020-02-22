import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';


const CharacterList = () => {
	const [ characters, setCharacters ] = useState([]);
	useEffect(() => {
		axios.get(`https://rickandmortyapi.com/api/character/`).then((response) => {
			console.log(response.data.results);
			setCharacters(response.data.results);
		}, []);
	});
	return (
		<div>
      <Link className="button2" to={'/'}> Home</Link>
			{characters.map((character) => {
				return (
					<CharacterCard
          key={character.id}
          image={character.image}
          name={character.name}
          gender={character.gender}
          location={character.location}
          status={character.status}
					/>
				);
			})}
      <Link className="button2" to={'/'}> Home</Link>
		</div>
	);
};
export default CharacterList;

