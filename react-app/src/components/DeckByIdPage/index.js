import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { useParams } from 'react-router-dom'

function DeckByIdPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const deck = useSelector(state => state.deck[0])
  useEffect(() => {
    dispatch(deckActions.getOneDeck(id))
  },[dispatch])

  return(
    <div>
      <h1>{deck?.deck_name}</h1>
      {deck?.cards?.map(card =>
        <>
          <img alt={card?.card_name} src={card?.card_image}></img>
        </>
       )}

    </div>
  )

}

export default DeckByIdPage
