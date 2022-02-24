import React from "react";
import { HomePageContainer } from '../styles/HomePage.styled'
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <HomePageContainer>
      <img alt='Home Page Image' src='https://cdn.discordapp.com/attachments/889944469359718421/935970509068308600/wp2805714-mtg-land-wallpaper.jpg'></img>
      <h1>Welcome to The Mana Curve!</h1>
      <p>This is a deckbuilding website created as a final project for App Academy by Corbin Arcus! Create decks, choose formats, and fill those decks with cards until your masterpiece is complete</p>
      <button>
        <NavLink to='/sign-up' exact={true} activeClassName='active'>
          Try it Now!
        </NavLink>
      </button>
    </HomePageContainer>
  );
}

export default HomePage;
