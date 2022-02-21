import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as commentActions from '../../store/comment'
import * as deckActions from '../../store/deck'
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { UpdateCommentsContainer } from '../styles/UpdateCommentPage.styled'

function UpdateCommentPage() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [ comment, setComment ] = useState('')
  const [errors, setErrors] = useState([])
  const session = useSelector(state => state.session)
  const currentUser = session.user.id
  const { id } = useParams()
  const comments = useSelector(state => state.comment.comments)
  const Usecomment = comments.filter(comment => comment.id == id)
  const commentId = Usecomment[0].id
  const deckId = Usecomment[0].deck_id

  useEffect(() => {
    setComment(Usecomment[0].comment)
  }, [dispatch])

  console.log(comment)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length < 5) {
      setErrors(['Comment must be more than 5 characters'])
    }
    else {
      setErrors([])
      history.push(`/decks/${deckId}`)
       dispatch(commentActions.updateOneComment(commentId, comment))
        return dispatch(commentActions.getAllComments(currentUser, deckId))

    }
  }

  return (
    <UpdateCommentsContainer>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <h1>Update your comment!</h1>
        <label>
          Comment:
          <input
          type='text'
          name='comment'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          />
        </label>
        <button type='submit'>Update Comment!</button>
      </form>
    </UpdateCommentsContainer>
  )
}

export default UpdateCommentPage;

