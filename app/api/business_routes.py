from flask import Blueprint
from flask_login import login_required
from app.models import db, Business, Image

business_routes = Blueprint("businesses", __name__)


#GET BUSINESS ROUTE
@business_routes.route("")
def get_business():
    businesses = Business.query.all()
    return {"businesses": [business.to_dict() for business in businesses]}
