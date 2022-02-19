from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CreateCommentForm(FlaskForm):
  user_id = IntegerField('user_id', validators=[DataRequired()])
  username = StringField('username', validators=[DataRequired()])
  deck_id = IntegerField('deck_id', validators=[DataRequired()])
  comment = StringField('comment', validators=[DataRequired()])
