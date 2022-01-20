from .db import db

class Deck(db.Model):
  __tablename__ = 'decks'

  id = db.Column(db.Integer, primary_key=True, nullable=False)

  user_id = db.Column(db.Integer,  db.ForeignKey('users.id'), nullable=False)

  deck_name = db.Column(db.String(100), nullable=False, unique=True)

  deck_format = db.Column(db.String(100), nullable=False, unique=True)

  created_at = db.Column(db.DateTime(timezone=True))

  updated_at = db.Column(db.DateTime(timezone=True))

  user = db.relationship('User', back_populates='decks')

  def to_dict(self):
            return {
                'id': self.id,
                'deck_name': self.deck_name,
                'deck_format': self.deck_format,
                'created_at': self.created_at,
                'updated_at': self.updated_at
            }
