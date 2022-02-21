import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deckActions from '../../store/deck'
import { NavLink, useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router';
import {DeckByIdContainer} from '../styles/DeckByIdPage.styled'
import Category from '../Category'

function DeckByIdPage({currentCard, setCurrentCard}) {
  const history = useHistory()
  const dispatch = useDispatch()
  const { id } = useParams()
  const deckArr = useSelector(state => state.deck.decks)
  useEffect(async () => {
    await dispatch(deckActions.getAllDecks(user.id))
  },[dispatch])
  const card = useSelector(state => state.card)
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == id)[0]
  }
  const user = useSelector(state => state.session.user)
  const deckId = deck?.id
  const sendId = () => {
    dispatch(deckActions.deleteADeck(deckId))
    history.push('/decks/all')
    return dispatch(deckActions.getAllDecks(user.id))
  }

  // const deleteCard = async (cardId) => {
  //   const deckId = deck?.id
  //   await dispatch(deckActions.removeACard({cardId, deckId}))
  //   await dispatch(deckActions.getAllDecks(user.id))
  // }

  const creatures = deck?.cards.filter(card => card.type_line.includes("Creature")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const artifacts = deck?.cards.filter(card => card.type_line.includes("Artifact") && !card.type_line.includes("Creature") && !card.type_line.includes("Land")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const enchantments = deck?.cards.filter(card => card.type_line.includes("Enchantment") && !card.type_line.includes("Creature")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const lands = deck?.cards.filter(card => card.type_line.includes("Land")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const planeswalkers = deck?.cards.filter(card => card.type_line.includes("Planeswalker")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const instants = deck?.cards.filter(card => card.type_line.includes("Instant")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))
  const sorcery = deck?.cards.filter(card => card.type_line.includes("Sorcery")).sort((a, b) => a.card_name.toLowerCase().localeCompare(b.card_name.toLowerCase()))



  return(
    <DeckByIdContainer>
      <h1>{deck?.deck_name}</h1>
      <button onClick={sendId}>Delete {deck?.deck_name} </button>
      <NavLink to={`/decks/${deckId}/edit`}><button>Rename Deck</button></NavLink>
      <br />
      <div className='cardContainer'>
        {creatures?.length > 0 &&
          <Category cards={creatures} title='Creature' deck={deck}/>
        }
        {artifacts?.length > 0 &&
          <Category cards={artifacts} title='Artifact' deck={deck}/>
        }
        {enchantments?.length > 0 &&
          <Category cards={enchantments} title='Enchantment' deck={deck}/>
        }
        {lands?.length > 0 &&
        <Category cards={lands} title='Land' deck={deck}/>
        }
        {planeswalkers?.length > 0 &&
          <Category cards={planeswalkers} title='Planeswalker' deck={deck}/>
        }
        {instants?.length > 0 &&
        <Category cards={instants} title='Instant' deck={deck}/>
        }
        {sorcery?.length > 0 &&
        <Category cards={sorcery} title='Sorcery' deck={deck}/>
        }
      </div>
    </DeckByIdContainer>
  )
}

export default DeckByIdPage
