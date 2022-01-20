const CREATE_DECK = 'deck/CREATE_DECK'
const GET_DECK = 'deck/GET_DECK'
const ADD_CARD = 'deck/ADD_CARD'

const addCard = (deck) => {
  return{
    type: ADD_CARD,
    payload: deck
  }
}

const getDeck = (deck) => {
  return{
    type: GET_DECK,
    payload: deck
  }
}

const createDeck = (deck) => {
  return{
    type: CREATE_DECK,
    payload: deck
  }
}

export const addACard = ({cardId, deckId}) => async (dispatch) => {
  const res = await fetch(`/api/decks/${deckId}/add/${cardId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deckId,
      cardId
    })
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(addCard(data))
    return data
  }
  else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) return data.errors
  }
  else {
    return ['An error occurred. Please try again']
  }
}

export const getOneDeck = (id) => async (dispatch) => {
  const res = await fetch(`/api/decks/${id}`)
  const data = await res.json()
  dispatch(getDeck(data.deck))
}

export const createADeck = ( user_id, deck_name, deck_format ) => async (dispatch) => {
  const res = await fetch('/api/decks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id,
      deck_name,
      deck_format
    })
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(createDeck(data))
    window.alert('Deck successfully added!')
    return data
  }
  else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) return data.errors
  }
  else {
    return ['An error occurred. Please try again']
  }
}


const deckReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case CREATE_DECK:
      newState = {...state, ...action.payload}
      return newState
    case GET_DECK:
      newState = {...state, ...action.payload}
      return newState
    case ADD_CARD:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}

export default deckReducer;
