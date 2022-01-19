from .db import db

deck_card = db.Table(
  'deck_cards',
  db.Column(
    'card_id',
    db.Integer,
    db.ForeignKey('cards.id'),
    primary_key=True
  ),
  db.Column(
    'deck_id',
    db.Integer,
    db.ForeignKey('decks.id'),
    primary_key=True
  )
)

class Deck_Card(object):
  def __init__(self, card_id, deck_id):
    self.card_id = card_id
    self.deck_id = deck_id

  def to_dict(self):
        return {
            'card_id': self.card_id,
            'deck_id': self.deck_id,
        }

db.mapper(Deck_Card, deck_card)

