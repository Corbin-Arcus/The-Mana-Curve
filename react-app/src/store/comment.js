const CREATE_COMMENT = 'comment/CREATE_COMMENT'
const GET_COMMENTS = 'comment/GET_COMMENTS'
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT'
const DELETE_COMMENT = 'comment/DELETE_COMMENT'

const deleteComment = () => {
  return {
    type: DELETE_COMMENT
  }
}

const updateComment = (comment) => {
  return{
    type: UPDATE_COMMENT,
    payload: comment
  }
}

const getComments = (comment) => {
  return{
    type: GET_COMMENTS,
    payload: comment
  }
}

const createComment = (comment) => {
  return{
    type: CREATE_COMMENT,
    payload: comment
  }
}

export const deleteAComment = (commentId) => async (dispatch) => {
  await fetch(`/api/comments/${commentId}`, {
    method:'DELETE'
  })
  dispatch(deleteComment())
}

export const updateOneComment = (commentId, comment ) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment
    })
  })
  if (res.ok) {
    const data = await res.json()
    dispatch(updateComment(data))
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
export const getAllComments = (userId, deckId) => async (dispatch) => {
  const res = await fetch (`/api/comments/${deckId}/${userId}`, {
    method: 'GET'
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(getComments(data))
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


export const createAComment = (user_id, deck_id, comment, username ) => async (dispatch) => {
  const res = await fetch('/api/comments/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user_id,
      deck_id,
      comment,
      username
    })
  })

  if (res.ok) {
    const data = await res.json()
    dispatch(createComment(data))
    window.alert('Comment successfully added!')
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


const commentReducer = (state = {}, action) => {
  let newState;
  switch(action.type) {
    case CREATE_COMMENT:
      newState = {...state, ...action.payload}
      return newState
    case GET_COMMENTS:
      newState = {...state, ...action.payload}
      return newState
    case UPDATE_COMMENT:
      newState = {...state, ...newState}
      return newState
    case DELETE_COMMENT:
      newState = {...state}
      return newState
    default:
      return state
  }
}

export default commentReducer
