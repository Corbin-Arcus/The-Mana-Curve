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
  # data = request.json
  print(form.data)
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    card_name = form.data['card_name']
    card_image = form.data['card_image']
    mana_cost = form.data['mana_cost']
    cmc = form.data['cmc']
    type_line = form.data['type_line']
    oracle_text = form.data['oracle_text']
    power = form.data['power']
    toughness = form.data['toughness']
    colors = form.data['colors']
    color_identity = form.data['color_identity']
    legalities = form.data['legalities']

    new_card = Card(card_name=card_name, card_image=card_image, mana_cost=mana_cost, cmc=cmc, type_line=type_line,oracle_text=oracle_text,power=power,toughness=toughness,colors=colors,color_identity=color_identity, legalities=legalities)

    db.session.add(new_card)
    db.session.commit()
    return new_card.to_dict()

  return {'message':'There was an error'}


@card_routes.route('/<int:id>')
def card_by_id(id):
  card = Card.query.get_or_404(id)

  return {'card': [card.to_dict()]}



