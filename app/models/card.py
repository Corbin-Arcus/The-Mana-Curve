from .db import db

class Card(db.Model):
  __tablename__ = 'cards'

  id = db.Column(db.Integer, primary_key=True, nullable=False)

  card_name = db.Column(db.String(100), nullable=False, unique=True)

  card_image = db.Column(db.String(255), nullable=False)

  mana_cost = db.Column(db.String(100), nullable=False, unique=True)

  cmc = db.Column(db.Integer, nullable=False)

  type_line = db.Column(db.String(100), nullable=False)

  oracle_text = db.Column(db.String(100), nullable=False, unique=True)

  power = db.Column(db.Integer)

  toughness = db.Column(db.Integer)

  colors = db.Column(db.String(100), nullable=False)

  color_identity = db.Column(db.String(100), nullable=False)

  legalities = db.Column(db.String(256), nullable=False)

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
                'legalities': self.legalities,
            }
