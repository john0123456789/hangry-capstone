from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Business
from app.forms.business_form import BusinessForm

business_routes = Blueprint("businesses", __name__)


#GET BUSINESS ROUTE
@business_routes.route("")
def get_business():
    businesses = Business.query.all()
    return {"businesses": [business.to_dict() for business in businesses]}

#CREATE BUSINESS ROUTE
@business_routes.route("/create", methods=['POST'])
@login_required
def create_business():
    form = BusinessForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    # if form.validate_on_submit():
    business = Business(
        user_id=form.data["user_id"],
        name=form.data["name"],
        address=form.data["address"],
        zipcode=form.data["zipcode"],
        city=form.data["city"],
        state=form.data["state"],
        phone_number=form.data["phone_number"],
        website=form.data["website"]
    )

    db.session.add(business)
    db.session.commit()
    return business.to_dict()

#UPDATE BUSINESS ROUTE
@business_routes.route('/<int:id>', methods=["PUT"])
@login_required
def update_business(id):
    business = Business.query.get(id)
    data = request.json
    business.name = data['name']
    business.address = data['address']
    business.zipcode = data['zipcode']
    business.city = data['city']
    business.state = data['state']
    business.phone_number = data['phone_number']
    business.website = data['website']

    db.session.commit()
    return business.to_dict()

#DELETE BUSINESS ROUTE
@business_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_business(id):
    business = Business.query.get(id)

    db.session.delete(business)
    db.session.commit()
    return business.to_dict()
