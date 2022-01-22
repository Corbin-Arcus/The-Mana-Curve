from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Deck, db, deck_card, Card
from app.forms.create_deck_form import CreateDeckForm
from app.forms.update_deck_form import UpdateDeckForm

deck_routes = Blueprint('decks', __name__ )

@deck_routes.route('/')
def decks():
  decks = Deck.query.all()
  return {'decks': [deck.to_dict() for deck in decks]}


@deck_routes.route('/', methods=['POST'])
def create_deck():
  form = CreateDeckForm()

  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    user_id = form.data['user_id']
    deck_name = form.data['deck_name']
    deck_format = form.data['deck_format']

    new_deck = Deck(user_id=user_id,deck_name=deck_name, deck_format=deck_format)

    db.session.add(new_deck)
    db.session.commit()
    return new_deck.to_dict()

  return{'message': 'There was an error'}

@deck_routes.route('/<int:id>')
def deck_by_id(id):
  deck = Deck.query.get_or_404(id)

  return{'deck': [deck.to_dict()]}

@deck_routes.route('/<int:deckId>/add/<int:cardId>', methods=['POST'])
def addCard(cardId, deckId):
  card = Card.query.get_or_404(cardId)

  deck = Deck.query.get_or_404(deckId)

  deck.add_card(card)

  return deck.to_dict()

@deck_routes.route('/<int:id>/', methods=['DELETE'])
def deleteDeck(id):
  deck = Deck.query.get_or_404(id)

  db.session.delete(deck)

  db.session.commit()

@deck_routes.route('/<int:id>', methods=['PUT'])
def updateDeck(id):
  data = request.json

  deck = Deck.query.get_or_404(id)

  form = UpdateDeckForm()

  deck.deck_name = data['deck_name']

  db.session.commit()

  return deck.to_dict()

