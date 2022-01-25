import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { Link } from 'react-router-dom';

function DecksPage(){
  const dispatch = useDispatch()
  const deck = useSelector(state => state.deck)
  const user = useSelector(state => state.session.user)
  console.log(`8888888888888888888888888--Decks Page--888888888888888888888888888`)
  console.log(deck)
  console.log(`888888888888888888888888888888888888888888888888888888888888888888`)
  // const decks = Object.values(deck)
  // const decksArr = decks[0]
  const [decksArr, setDecksArr] = useState([])
  // const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    dispatch(deckActions.getAllDecks(user.id))
  },[dispatch])

  useEffect(() => {
    console.log(`888888888888888888888888888--UseEffect--88888888888888888888888888`)
    console.log(deck)
    console.log(`888888888888888888888888888888888888888888888888888888888888888888`)
    const decks = Object.values(deck)
    setDecksArr(decks[0])
  },[])

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
