from .db import db
from .deck_card import deck_cards, Deck_Cards

class Deck(db.Model):
  __tablename__ = 'decks'

  id = db.Column(db.Integer, primary_key=True, nullable=False)

  user_id = db.Column(db.Integer,  db.ForeignKey('users.id'), nullable=False)

  deck_name = db.Column(db.String(100), nullable=False, unique=True)

  deck_format = db.Column(db.String(100), nullable=False)

  cards = db.relationship(
    'Card',
    secondary=deck_cards,
    back_populates='decks'
  )

  def add_card(self, card):
    self.cards.append(card)
    db.session.commit()
    return self

  def remove_card(self, card):
    if card in self.cards:
     self.cards.remove(card)
     db.session.commit()
     return self


  def to_dict(self):
            return {
                'id': self.id,
                'deck_name': self.deck_name,
                'deck_format': self.deck_format,
                'cards': [card.to_dict() for card in self.cards]
            }
