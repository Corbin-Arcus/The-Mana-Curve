from app.forms.create_card_form import CreateCardForm
from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Card, db

card_routes = Blueprint('cards', __name__)


@card_routes.route('/')
def cards():
  cards = Card.query.all()
  return {'cards': [card.to_dict() for card in cards]}

@card_routes.route('/', methods=['POST'])
def create_card():
  form = CreateCardForm()
  data = request.json

  card_name = data['card_name']
  card_image = data['card_image']
  mana_cost = data['mana_cost']
  cmc = data['cmc']
  type_line = data['type_line']
  oracle_text = data['oracle_text']
  power = data['power']
  toughness = data['toughness']
  colors = data['colors']
  color_identity = data['color_identity']
  legalities = data['legalities']

  new_card = Card(card_name=card_name, card_image=card_image, mana_cost=mana_cost, cmc=cmc, type_line=type_line,oracle_text=oracle_text,power=power,toughness=toughness,colors=colors,color_identity=color_identity,legalities=legalities)
  print('==================================================================')
  print(new_card.to_dict())
  print('==================================================================')
  try:
    db.session.add(new_card)
    db.session.commit()
    return new_card.to_dict()
  except:
    return "There was an error creating that card"


