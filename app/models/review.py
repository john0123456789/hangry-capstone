from .db import db
import datetime

class Review(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey("businesses.id"), nullable=False)
    business_review = db.Column(db.String(500), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())

    users = db.relationship("User", back_populates="reviews")
    businesses = db.relationship("Business", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "user": self.users.to_dict(),
            "business": self.businesses.to_dict(),
            "business_review": self.business_review,
            "rating": self.rating,
            "created_at": self.created_at
        }
