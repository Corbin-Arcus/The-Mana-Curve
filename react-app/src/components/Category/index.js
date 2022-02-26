import { NavLink, useParams, Link } from 'react-router-dom'
import { CategoryContainer } from '../styles/Category.styled'
import * as deckActions from '../../store/deck'
import { useDispatch, useSelector } from 'react-redux';
const Category = ({cards, title, deck}) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const deleteCard = async (cardId) => {
    const deckId = deck?.id
    await dispatch(deckActions.removeACard({cardId, deckId}))
    await dispatch(deckActions.getAllDecks(user.id))
  }

  return(
    <CategoryContainer>
      <h2>{title}</h2>
      {cards?.map((card) => (
        <div className='card'>
          <Link to={`/cards/${card.id}`}><img alt={card?.card_name} src={card?.card_image}></img></Link>
        <button className='delete' onClick={() => deleteCard(card.id)}>Delete card</button>
      </div>
      ))}
    </CategoryContainer>
  )
}

export default Category
