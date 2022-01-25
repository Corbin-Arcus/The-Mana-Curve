import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { NavLink, useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router';

function DeckByIdPage({currentCard, setCurrentCard}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const deck = useSelector(state => state.deck[0])
  console.log(`888888888888888888888888888888--Deck by Id Page--88888888888888888`)
  console.log(deck)
  console.log(`888888888888888888888888888888888888888888888888888888888888888888`)
  const card = useSelector(state => state.card)
  useEffect(async () => {
    await dispatch(deckActions.getOneDeck(id))
  },[dispatch, currentCard])
  const deckId = deck?.id
  const sendId = () => {
    dispatch(deckActions.deleteADeck(deckId))
    history.push('/')
  }

  const deleteCard = (cardId) => {
    const deckId = deck?.id
    const deleteCard = dispatch(deckActions.removeACard({cardId, deckId}))
    setCurrentCard(deleteCard)
  }


  return(
    <div>
      <h1>{deck?.deck_name}</h1>
      <button onClick={sendId}>Delete {deck?.deck_name} </button>
      <NavLink to={`/decks/${deckId}/edit`}><button>Rename Deck</button></NavLink>
      <br />
      {deck?.cards?.map(card =>
        <>
          <Link to={`/cards/${card.id}`}><img alt={card?.card_name} src={card?.card_image}></img></Link>
          <button onClick={() => deleteCard(card.id)}>Delete card</button>
        </>
       )}
    </div>
  )
}

export default DeckByIdPage
