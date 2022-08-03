from flask_wtf import FlaskForm
from wtforms.fields import ( StringField, IntegerField )
from wtforms.validators import DataRequired


class BusinessForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    name = StringField("name", validators=[DataRequired()])
    address = StringField("address", validators=[DataRequired()])
    zipcode = StringField("zipcode", validators=[DataRequired()])
    city = StringField("city", validators=[DataRequired()])
    state = StringField("state", validators=[DataRequired()])
    country = StringField("country", validators=[DataRequired()])
    phone_number = StringField("phone_number", validators=[DataRequired()])
    website = StringField("website", validators=[DataRequired()])
