import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { NavLink, useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import {DeckByIdContainer} from '../styles/DeckByIdPage.styled'

function DeckByIdPage({currentCard, setCurrentCard}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const deckArr = useSelector(state => state.deck.decks)
  useEffect(async () => {
    await dispatch(deckActions.getAllDecks(user.id))
  },[dispatch])
  const card = useSelector(state => state.card)
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == id)[0]
  }
  const user = useSelector(state => state.session.user)
  const deckId = deck?.id
  const sendId = () => {
    dispatch(deckActions.deleteADeck(deckId))
    history.push('/decks/all')
  }

  const deleteCard = async (cardId) => {
    const deckId = deck?.id
    await dispatch(deckActions.removeACard({cardId, deckId}))
    await dispatch(deckActions.getAllDecks(user.id))
  }


  return(
    <DeckByIdContainer>
      <h1>{deck?.deck_name}</h1>
      <button onClick={sendId}>Delete {deck?.deck_name} </button>
      <NavLink to={`/decks/${deckId}/edit`}><button>Rename Deck</button></NavLink>
      <br />
      <div className='cardContainer'>
        {deck?.cards?.map(card =>
          <div className='card'>
            <Link to={`/cards/${card.id}`}><img alt={card?.card_name} src={card?.card_image}></img></Link>
            <button onClick={() => deleteCard(card.id)}>Delete card</button>
          </div>
        )}
      </div>
    </DeckByIdContainer>
  )
}

export default DeckByIdPage
