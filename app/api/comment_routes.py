from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Deck, db, Comment, User
from app.forms.create_comment_form import CreateCommentForm
from app.forms.update_comment_form import UpdateCommentForm

comment_routes = Blueprint('comments', __name__)

@comment_routes.route('/', methods=['POST'])
def create_comment():
  form = CreateCommentForm()

  form['csrf_token'].data = request.cookies['csrf_token']




  if form.validate_on_submit():
    user_id = form.data['user_id']
    deck_id = form.data['deck_id']
    comment = form.data['comment']
    username = form.data['username']


    new_comment = Comment(user_id=user_id,deck_id=deck_id,comment=comment, username=username)

    db.session.add(new_comment)
    db.session.commit()
    return new_comment.to_dict()

  return{'message': 'There was an error'}

@comment_routes.route('/<int:deckId>/<int:userId>')
def comments(userId, deckId):
  comments = Comment.query.filter(Comment.deck_id == deckId).filter(Comment.user_id == userId).all()
  return {'comments': [comment.to_dict() for comment in comments]}

@comment_routes.route('/<int:id>', methods=['DELETE'])
def deleteComment(id):
  comment = Comment.query.get_or_404(id)

  db.session.delete(comment)

  db.session.commit()

@comment_routes.route('/<int:id>', methods=['PUT'])
def updateComment(id):
  data = request.json

  comment = Comment.query.get_or_404(id)

  form = UpdateCommentForm()

  comment.comment = data['comment']

  db.session.commit()

  return comment.to_dict()

