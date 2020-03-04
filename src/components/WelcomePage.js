import React from "react";
import { Link } from 'react-router-dom';


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the Ultimate Rick and Morty Fan Labs</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link className="button" to={'/characters'}> View Characters</Link>
      </header>
    </section>
  );
}
