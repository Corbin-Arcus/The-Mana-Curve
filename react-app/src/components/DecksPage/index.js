import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { Link } from 'react-router-dom';

function DecksPage(){
  const dispatch = useDispatch()
  const deck = useSelector(state => state.deck)
  const user = useSelector(state => state.session.user)
  const decks = Object.values(deck)
  const decksArr = decks[0]
  useEffect(() => {
    dispatch(deckActions.getAllDecks(user.id))
  },[dispatch])


  return(
    <div>
      {decksArr?.map(deck =>
        <>
          <h1><Link to={`/decks/${deck.id}`}>{deck.deck_name}</Link></h1>
          <br />
        </>
      )}
    </div>
  )
}

export default DecksPage;
