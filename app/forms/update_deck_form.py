from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class UpdateDeckForm(FlaskForm):
  deck_name = StringField('deck_name', validators=[DataRequired()])
  deck_format = StringField('deck_format', validators=[DataRequired()])
