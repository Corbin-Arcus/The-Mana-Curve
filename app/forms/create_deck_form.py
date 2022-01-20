from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CreateDeckForm(FlaskForm):
  user_id = IntegerField('user_id', validators=[DataRequired()])
  deck_name = StringField('deck_name', validators=[DataRequired()])
  deck_format = StringField('deck_format', validators=[DataRequired()])
  
