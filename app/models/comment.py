from .db import db

class Comment(db.Model):
  __tablename__ = 'comments'

  id = db.Column(db.Integer, primary_key=True, nullable=False)

  user_id = db.Column(db.Integer,  db.ForeignKey('users.id'), nullable=False)

  username = db.Column(db.String(100), nullable=False)

  deck_id = db.Column(db.Integer, db.ForeignKey('decks.id'), nullable=False)

  comment = db.Column(db.String(500), nullable=False)


  def to_dict(self):
          return {
              'id': self.id,
              'user_id': self.user_id,
              'deck_id': self.deck_id,
              'comment': self.comment,
              'username': self.username
          }
