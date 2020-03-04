import React, { useState, useEffect } from 'react';

import CharacterCard from './CharacterCard';

const SearchForm = ({ characters }) => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(characters);

  const inputHandler = event => setSearch(event.target.value);

  useEffect(() => {
    const results = characters.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );

    setResult(results);
  }, [search, characters]);

  return (
    <div>
      <section className='search-form'>
        <label>
          <span>Find Characters: </span>
          <br></br>
          <input type='text' placeholder='Search Character Name' onChange={inputHandler} />
        </label>
      </section>

      <section className='character-list'>
        {result.map(character => (
          <CharacterCard 
          key={character.id}
          image={character.image}
          name={character.name}
          gender={character.gender}
          location={character.location}
          status={character.status} />
        ))}
      </section>
    </div>
  );
};

export default SearchForm;
