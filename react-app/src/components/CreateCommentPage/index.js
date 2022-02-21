import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as commentActions from '../../store/comment'
import { useHistory } from 'react-router';
import {CreateCommentsContainer} from '../styles/CreateCommentPage.styled'
import { NavLink, useParams, Link } from 'react-router-dom'

function CreateCommentPage() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(0)
  const [deckId, setDeckId] = useState(0)
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const session = useSelector(state => state.session);
  const currentUser = session.user.id
  const deckArr = useSelector(state => state.deck.decks)
  const theusername = session.user.username
  const { id } = useParams()
  let deck;
  if (deckArr){
    deck = deckArr.filter(deck => deck.id == id)[0]
  }

  useEffect(() => {
    setUserId(currentUser)
    setDeckId(deck?.id)
    setUsername(theusername)
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length < 5) {
      setErrors(['Deck name must be greater than 5 characters'])
    }
    else {
      setErrors([])
      // history.push(`/decks/${deckId}`)
       await dispatch(commentActions.createAComment(userId, id, comment, username ))
       console.log(deckId)
       dispatch(commentActions.getAllComments(userId, id))
      }
  }


  return (
    <CreateCommentsContainer>
      <form onSubmit={handleSubmit} className='form'>
        {errors.length > 0 && <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
        <h1>Leave a Comment!</h1>
        <input
        type='hidden'
        name='user_id'
        value={userId}
        />
        <input
        type='hidden'
        name='deck_id'
        value={deckId}
        />
        <input
        type='hidden'
        name='username'
        value={username}
        />
        <br />
        <label>
          Comment
          <br />
          <input
          type='text'
          name='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          />
        </label>
        <br />
        <button type='submit'>Create Comment!</button>
      </form>
    </CreateCommentsContainer>
  )
}

export default CreateCommentPage;
