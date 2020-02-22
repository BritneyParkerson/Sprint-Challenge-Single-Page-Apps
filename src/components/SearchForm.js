import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
 
  const [info, setInfo] = useState([]);
  const [que, setQue] = useState("");

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const characters = response.data.results.filter(character =>
        character.name.toLowerCase().includes(que.toLowerCase())
      );
        setInfo(characters);
  });
}, [que]);

const handleChange => {
  setQue(event.target.value);
};
  return (
    <div>
      <form>
        <input
          id="name"
          name="textfield"
          type="text"
          placeholder="Search..."
          value={que}
          onChange={handleChange}
        />
        <Link to="/">
          <btn>Home</btn>
        </Link>
      </form>

      {info.map(characters => {
        return(
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
    </div>
  );
}


