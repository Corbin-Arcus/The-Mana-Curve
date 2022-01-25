import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/card'
import * as deckActions from '../../store/deck'
import { useHistory } from 'react-router';

function CreateCardPage({currentCard, setCurrentCard}) {
  const history = useHistory();
  const dispatch = useDispatch()
  const card = useSelector(state => state.card)
  const deck = useSelector(state => state.deck[0])
  console.log(`888888888888888888888888888888--Create Card Page--88888888888888888`)
  console.log(deck)
  console.log(`888888888888888888888888888888888888888888888888888888888888888888`)
  const [cardName, setCardName] = useState('')
  const [errors, setErrors] = useState([])
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cardName.length > 100) {
      setErrors(['Card name must be between 5 and 100 characters'])
    }
    else {
      setErrors([])
       const data = await dispatch(cardActions.addACard(cardName))
    }
  }
  useEffect(async () => {
    const cardId = card?.id
    const deckId = deck?.id
    const data2 = await dispatch(deckActions.addACard({cardId, deckId}))
    setCurrentCard(data2)
  },[card])


  return(
    <div>
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
        <button type='submit'>Add to deck!</button>
      </form>
    </div>
  )
}

export default CreateCardPage
