const CREATE_DECK = 'deck/CREATE_DECK'

const createDeck = (deck) => {
  return{
    type: CREATE_DECK,
    payload: deck
  }
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
    default:
      return state
  }
}

export default deckReducer;
