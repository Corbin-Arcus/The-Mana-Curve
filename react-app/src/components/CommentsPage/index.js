import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as commentActions from '../../store/comment'
import * as deckActions from '../../store/deck'
import { DecksContainer } from '../styles/DecksPage.styled'
import { NavLink, useParams, Link, useHistory } from 'react-router-dom'

function CommentsPage(){
  const history = useHistory()
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comment.comments)
  const user = useSelector(state => state.session.user)
  const deckArr = useSelector(state => state.deck.decks)
  const { id } = useParams()
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == id)[0]
  }
  useEffect(() => {
    dispatch(commentActions.getAllComments(user.id, deck.id))
  }, [dispatch])

  const sendId = (comment) => {
    dispatch(commentActions.deleteAComment(comment.id))
    history.push(`/decks/${comment.deck_id}`)
    return dispatch(commentActions.getAllComments(user.id, comment.deck_id))
  }



  return (
    <div>
      <h1>Comments:</h1>
      {comments?.map(comment =>
        <>
          <h5>{comment.username}</h5>
          <h2>{comment.comment}</h2>
          <NavLink to={`/comments/${comment.id}/edit`}><button>Edit</button></NavLink>
          <button onClick={() => sendId(comment)}>Delete comment</button>
        </>
      )}
    </div>
  )
}

export default CommentsPage;
