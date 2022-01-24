import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { NavLink, useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router';

function DeckByIdPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const deck = useSelector(state => state.deck[0])
  const card = useSelector(state => state.card)
  useEffect(() => {
    dispatch(deckActions.getOneDeck(id))
  },[dispatch, card])
  const deckId = deck?.id
  const sendId = () => {
    dispatch(deckActions.deleteADeck(deckId))
    history.push('/')
  }

  const deleteCard = (cardId) => {
    const deckId = deck?.id
    dispatch(deckActions.removeACard({cardId, deckId}))
  }


  return(
    <div>
      <h1>{deck?.deck_name}</h1>
      <button onClick={sendId}>Delete {deck?.deck_name} </button>
      <NavLink to={`/decks/${deckId}/edit`}><button>Edit Deck</button></NavLink>
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
