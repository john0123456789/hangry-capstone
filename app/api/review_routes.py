from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Review
from app.forms.review_form import ReviewForm

review_routes = Blueprint("reviews", __name__)


# GET REVIEW ROUTE
@review_routes.route("/business/<int:id>")
def get_reviews(id):
    reviews = Review.query.filter(Review.business_id == id)
    return {"reviews": [review.to_dict() for review in reviews]}


# CREATE REVIEW ROUTE
@review_routes.route("", methods=['POST'])
@login_required
def create_review():
    form = ReviewForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    # if form.validate on_submit():
    review = Review(
        user_id=form.data["user_id"],
        business_id=form.data["business_id"],
        review=form.data["review"],
        rating=form.data["rating"]
    )

    db.session.add(review)
    db.session.commit()
    return review.to_dict()

# DELETE REVIEW ROUTE
@review_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_review(id):
    review = Review.query.get(id)
    
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
