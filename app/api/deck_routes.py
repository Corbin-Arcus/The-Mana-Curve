from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Deck, db, deck_card
from app.forms.create_deck_form import CreateDeckForm

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
