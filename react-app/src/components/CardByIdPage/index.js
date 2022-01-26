import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as cardActions from '../../store/card'
import { Link, useParams, NavLink } from 'react-router-dom'
import { CardByIdContainer } from '../styles/CardByIdPage.styled'

function CardByIdPage() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const card = useSelector(state => state.card[0])

  useEffect(() => {
    dispatch(cardActions.getOneCard(id))
  }, [dispatch])

  return(
    <CardByIdContainer>
      <img alt={card?.card_name} src={card?.card_image}></img>
      <h1>{card?.card_name}</h1>
      <h2>{card?.type_line}</h2>
      <h3>Mana Cost: {card?.mana_cost}</h3>
      <h3>Converted Mana Cost:{card?.cmc}</h3>
      <p>{card?.oracle_text}</p>
    </CardByIdContainer>
  )
}


export default CardByIdPage
