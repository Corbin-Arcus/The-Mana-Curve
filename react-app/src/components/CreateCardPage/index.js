import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/card'
import * as deckActions from '../../store/deck'
import { NavLink, useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import {CreateCardContainer} from '../styles/CreateCardPage.styled'

function CreateCardPage({currentCard, setCurrentCard}) {
  const history = useHistory();
  const dispatch = useDispatch()
  const { id } = useParams()
  const card = useSelector(state => state.card)
  const deckArr = useSelector(state => state.deck.decks)
  const user = useSelector(state => state.session.user)
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == id)[0]
  }
  const [cardName, setCardName] = useState('')
  const [errors, setErrors] = useState([])
  const [toggle, setToggle] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cardName.length > 100) {
      setErrors(['Card name must be between 5 and 100 characters'])
    }
    else {
      setErrors([])
      await dispatch(cardActions.addACard(cardName))
    }
    setCardName('')
  }


  useEffect(async () => {
    if(toggle == true){
      const cardId = card?.id
      const deckId = deck?.id
      await dispatch(deckActions.addACard({cardId, deckId}))
      dispatch(deckActions.getAllDecks(user.id))
      setToggle(false)
    }
  },[card])


  return(
    <CreateCardContainer>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h1>Search for a Card by Name</h1>
        <label>
          Card Name
          <input
          type='text'
          name='card_name'
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
          />
        </label>
        <button type='submit' onClick={() => setToggle(true)}>Add to deck!</button>
      </form>
    </CreateCardContainer>
  )
}

export default CreateCardPage
