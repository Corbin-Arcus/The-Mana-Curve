import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { UpdateDecksContainer } from '../styles/UpdateDeckPage.styled'


function UpdateDeckPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [deckName, setDeckName] = useState('')
  const [errors, setErrors] = useState([])
  const session = useSelector(state => state.session);
  const currentUser = session.user.id
  const { id } = useParams()
  const deckId = id
  const deckArr = (useSelector(state => state.deck.decks))
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == deckId)[0]
  }
  console.log(deck)
  // console.log(deck)
  useEffect(() => {
    setDeckName(deck.deck_name)
  },[dispatch])





  const handleSubmit = async (e) => {
    e.preventDefault();
    if (deckName.length < 5 || deckName.length > 100) {
      setErrors(['Deck name must be between 5 and 100 characters'])
    }
    else {
      setErrors([])
      history.push(`/decks/${deckId}`)
       dispatch(deckActions.updateOneDeck(deckId, deckName))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors.length > 0) setErrors(data.errors)
        })
        await dispatch(deckActions.getAllDecks(currentUser))

    }
  }


  return (
    <UpdateDecksContainer>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h1>Update your deck!</h1>
        <label>
          Deck Name
          <input
          type='text'
          name='deck_name'
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          required
          />
        </label>
        <button type='submit'>Update Deck!</button>
      </form>
    </UpdateDecksContainer>
  )
}

export default UpdateDeckPage;
