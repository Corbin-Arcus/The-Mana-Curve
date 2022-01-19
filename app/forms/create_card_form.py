from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class CreateCardForm(FlaskForm):
  card_name = StringField('card_name', validators=[DataRequired()])
  card_image = StringField('card_image',  validators=[DataRequired()])
  mana_cost = StringField('mana_cost',  validators=[DataRequired()])
  cmc = IntegerField('cmc', validators=[DataRequired()])
  type_line = StringField('type_line', validators=[DataRequired()])
  oracle_text = StringField('oracle_text', validators=[DataRequired()])
  power = IntegerField('power')
  toughness = IntegerField('toughness')
  colors = StringField('colors', validators=[DataRequired()])
  color_identity = StringField('color_identity', validators=[DataRequired()])
  legalities = StringField('legalities', validators=[DataRequired()])

