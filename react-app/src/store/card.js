const ADD_CARD = 'card/ADD_CARD'
const GET_CARD = 'card/GET_CARD'

const addCard = (card) => {
  return{
    type: ADD_CARD,
    payload: card
  }
}

const getCard = (card) => {
  return{
    type: GET_CARD,
    payload: card
  }
}

export const getOneCard = (id) => async (dispatch) => {
  const res = await fetch(`/api/cards/${id}`)
  const data = await res.json()
  dispatch(getCard(data.card))
}

export const addACard = (cardName) => async (dispatch) => {
  const card = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${cardName}`)
  // .then(response => response.json())
  // .then(data => console.log(data));


  const data = await card.json()

  const card_name = data.name
  const card_image = data.image_uris['small']
  const mana_cost = data.mana_cost
  const cmc = data.cmc
  const type_line = data.type_line
  const oracle_text = data.oracle_text
  const power = data.power
  const toughness = data.toughness
  const colors = `${data.colors}`
  const color_identity = `${data.color_identity}`
  const legalities = data.legalities
  const usableLegalities = JSON.stringify(legalities)


  const res = await fetch('/api/cards/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      card_name,
      card_image,
      mana_cost,
      cmc,
      type_line,
      oracle_text,
      power,
      toughness,
      colors,
      color_identity,
      legalities: usableLegalities
    })
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(addCard(data))
    window.alert('Card successfully added!')
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

const cardReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_CARD:
      newState = {...state, ...action.payload}
      return newState
    case GET_CARD:
      newState = {...state, ...action.payload}
      return newState
    default:
      return state
  }
}

export default cardReducer;

