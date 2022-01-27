import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { useHistory } from 'react-router';
import {CreateDecksContainer} from '../styles/CreateDeckPage.styled'


function CreateDeckPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [userId, setUserId] = useState(0)
  const [deckName, setDeckName] = useState('')
  const [deckFormat, setDeckFormat] = useState('')
  const [errors, setErrors] = useState([])
  // const deck = useSelector(state => state.deck)
  const session = useSelector(state => state.session);
  const currentUser = session.user.id



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (deckName.length < 5 || deckName.length > 100) {
      setErrors(['Deck name must be between 5 and 100 characters'])
    }
    else if (!deckFormat) {
      setErrors(['Deck format is required'])
    }
    else {
      setErrors([])
      history.push('/decks/all')
      return dispatch(deckActions.createADeck(currentUser, deckName, deckFormat ))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors.length > 0) setErrors(data.errors)
        })
    }
  }


  return (
    <CreateDecksContainer>
      <form onSubmit={handleSubmit} className='form'>
        {errors.length > 0 && <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
        <h1>Create your deck!</h1>
        <input
        type='hidden'
        name='user_id'
        value={currentUser}
        />
        <label>
          Deck Name
          <br />
          <input
          type='text'
          name='deck_name'
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
          required
          />
        </label>
        <br />
        <label>
          Choose your deck's format!
          <br />
          <select value={deckFormat} name='deck_format' onChange={(e) => setDeckFormat(e.target.value)}>
            <option></option>
            <option value='Standard'>Standard</option>
            <option value='Modern'>Modern</option>
            <option value='Legacy'>Legacy</option>
            <option value='Vintage'>Vintage</option>
            <option value='Pioneer'>Pioneer</option>
            <option value='Pauper'>Pauper</option>
            <option value='EDH/Commander'>EDH/Commander</option>
            <option value='CEDH/Competitive Commander'>CEDH/Competitive Commander</option>
          </select>
        </label>
        <br />
        <button type='submit'>Create Deck!</button>
      </form>
    </CreateDecksContainer>
  )
}

export default CreateDeckPage;
