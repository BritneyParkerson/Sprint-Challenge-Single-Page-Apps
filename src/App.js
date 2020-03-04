import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList'
import "../src/search.css";



export default function App() {
  return (
    <main>
      <div>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route exact path ='/characters' component={CharacterList}/> 

    </div>
    </main>
  );
}
