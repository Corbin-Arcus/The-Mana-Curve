import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { Link } from 'react-router-dom';
import { DecksContainer } from '../styles/DecksPage.styled'

function DecksPage(){
  const dispatch = useDispatch()
  const decks = useSelector(state => state.deck)
  const user = useSelector(state => state.session.user)
  const deckArr = decks.decks

  useEffect(() => {
    dispatch(deckActions.getAllDecks(user.id))
  },[dispatch])


  return(
    <DecksContainer>
      <h1>All your decks:</h1>
      <table>
        <tr>
          <th>Deck Name</th>
          <th>Deck Format</th>
        </tr>
          {deckArr?.slice(0).reverse().map(deck =>
            <tr>
              <td><Link to={`/decks/${deck.id}`}>{deck.deck_name}</Link></td>
              <td>{deck.deck_format}</td>
            </tr>
          )}
      </table>
    </DecksContainer>
  )
}

export default DecksPage;
