const CREATE_DECK = 'deck/CREATE_DECK'
const GET_DECK = 'deck/GET_DECK'
const ADD_CARD = 'deck/ADD_CARD'
const DELETE_DECK = 'deck/DELETE_DECK'
const UPDATE_DECK = 'deck/UPDATE_DECK'
const GET_DECKS = 'decks/GET_DECKS'
const DELETE_CARD = 'deck/DELETE_CARD'

const deleteCard = (deck) => {
  return{
    type: DELETE_CARD,
    payload: deck
  }
}

const getDecks = (deck) => {
  return{
    type: GET_DECKS,
    payload: deck
  }
}

const updateDeck = (deck) => {
  return{
    type: UPDATE_DECK,
    payload: deck
  }
}

const deleteDeck = () => {
  return{
    type:DELETE_DECK
  }
}

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

export const getAllDecks = (userId) => async (dispatch) => {
  const res = await fetch (`/api/decks/all/${userId}`, {
    method: 'GET'
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(getDecks(data))
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

export const updateOneDeck = (deckId, deck_name ) => async (dispatch) => {
  const res = await fetch(`/api/decks/${deckId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      deck_name
    })
  })
  if (res.ok) {
    const data = await res.json()
    dispatch(updateDeck(data))
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

export const deleteADeck = (deckId) => async (dispatch)=> {
  await fetch(`/api/decks/${deckId}/`, {
    method: 'DELETE'
  })
  dispatch(deleteDeck())
}

export const removeACard = ({cardId, deckId}) => async (dispatch) => {
  const res = await fetch(`/api/decks/${deckId}/remove/${cardId}`, {
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
    dispatch(deleteCard(data))
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
    case DELETE_DECK:
      newState = {...state}
      return newState
    case UPDATE_DECK:
      newState = {...state, ...newState}
      return newState
    case GET_DECKS:
      newState = {...action.payload}
      return newState
    default:
      return state
  }
}

export default deckReducer;
