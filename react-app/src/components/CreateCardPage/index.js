import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/card'
import { useHistory } from 'react-router';

function CreateCardPage() {
  const history = useHistory();
  const dispatch = useDispatch()
  const card = useSelector(state => state.card)
  const [cardName, setCardName] = useState('')
  // const [cardImage, setCardImage] = useState('')
  // const [manaCost, setManaCost] = useState('')
  // const [cmc, setCmc] = useState(0)
  // const [typeLine, setTypeLine] = useState('')
  // const [oracleText, setOracleText] = useState('')
  // const [power, setPower] = useState(null)
  // const [toughness, setToughness] = useState(null)
  // const [colors, setColors] = useState('')
  // const [colorIdentity, setColorIdentity] = useState('')
  // const [legalities, setLegalities] = useState('')
  const [errors, setErrors] = useState([])
  // useEffect(() => {
  //   dispatch(cardActions.addACard(cardName))
  // })

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cardName.length < 5 || cardName.length > 100) {
      setErrors(['Card name must be between 5 and 100 characters'])
    }
    else {
      setErrors([])
      history.push('/')
      return dispatch(cardActions.addACard(cardName))
        .catch(async (res) => {
          const data = await res;
          if (data && data.errors.length > 0) setErrors(data.errors)
        })
    }
  }


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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateCardPage
