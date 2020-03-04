import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


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
	  <div>
      <SearchForm characters={characters} />
   	 </div>
      <Link className="button2" to={'/'}> Home</Link>
		</div>
	);
};
export default CharacterList;

