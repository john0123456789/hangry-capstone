from flask_wtf import FlaskForm
from wtforms.fields import ( StringField, IntegerField )
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    user_id = IntegerField("user_id", validators=[DataRequired()])
    business_id = IntegerField("business_id", validators=[DataRequired()])
    business_review = StringField("business_review", validators=[DataRequired()])
    rating = IntegerField("rating", validators=[DataRequired()])
