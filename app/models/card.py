from .db import db
from .deck_card import deck_cards, Deck_Cards

class Card(db.Model):
  __tablename__ = 'cards'

  id = db.Column(db.Integer, primary_key=True, nullable=False)

  card_name = db.Column(db.String(500), nullable=False)

  card_image = db.Column(db.String(500), nullable=False)

  mana_cost = db.Column(db.String(500), nullable=True)

  cmc = db.Column(db.Integer, nullable=True)

  type_line = db.Column(db.String(500), nullable=False)

  oracle_text = db.Column(db.String(500), nullable=False)

  power = db.Column(db.String(500), nullable=True)

  toughness = db.Column(db.String(500), nullable=True)

  colors = db.Column(db.String(500), nullable=True)

  color_identity = db.Column(db.String(500), nullable=True)

  legalities = db.Column(db.String(500), nullable=False)

  decks = db.relationship(
    'Deck',
    secondary=deck_cards,
    back_populates='cards'
  )

  def to_dict(self):
            return {
                'id': self.id,
                'card_name': self.card_name,
                'card_image': self.card_image,
                'mana_cost': self.mana_cost,
                'cmc': self.cmc,
                'type_line': self.type_line,
                'oracle_text': self.oracle_text,
                'power': self.power,
                'toughness': self.toughness,
                'colors': self.colors,
                'color_identity': self.color_identity,
                'legalities': self.legalities
            }
