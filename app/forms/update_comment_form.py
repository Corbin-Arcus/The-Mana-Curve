from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class UpdateCommentForm(FlaskForm):
  comment = StringField('comment', validators=[DataRequired()])
