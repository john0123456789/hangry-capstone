from .db import db
import datetime

class Business(db.Model):
    __tablename__ = "businesses"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(25), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    country = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(50), nullable=False)
    website = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.datetime.now())

    users = db.relationship("User", back_populates="businesses")
    reviews = db.relationship("Review", back_populates="businesses", cascade="all, delete")
    business_images = db.relationship("Image", back_populates="business_image", cascade="all, delete")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "name": self.name,
            "address": self.address,
            "zipcode": self.zipcode,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "phone_number": self.phone_number,
            "website": self.website,
            "created_at": self.created_at,
        }
