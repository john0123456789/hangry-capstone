import { updateReviewThunk, getReviewsThunk, deleteReviewThunk } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './index.css'

function EditReviewPage({review, business, setShowModal}) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    const [user_id] = useState(user.id);
    const [business_id] = useState(business.id)

    const [business_review, setBusinessReview] = useState(review.business_review);
    const [rating, setRating] = useState(review.rating);

    const updateReviewClick = async (e) => {
        e.preventDefault();

        const updateReview = {
            user_id,
            business_id,
            business_review,
            rating
        }

        await dispatch(updateReviewThunk(updateReview, review.id))
        await dispatch(getReviewsThunk(business.id))
        setShowModal(false);
    }

    const deleteReviewClick = async (e) => {
        e.preventDefault()

        await dispatch(deleteReviewThunk(review.id))
        setShowModal(false);
    }




    return (
        <form className="review-form" onSubmit={updateReviewClick}>
            <h1>Edit Review</h1>
            <textarea type="text" placeholder="Your Review Here" value={business_review} onChange={(e) => setBusinessReview(e.target.value)}/>
            {/* <select value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}>
            <option>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select> */}
            <div className="star-rating">
                <input type="radio" id="1star" value="1" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="1star">&#9733;</label>
                <input type="radio" id="2star" value="2" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="2star">&#9733;</label>
                <input type="radio" id="3star" value="3" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="3star">&#9733;</label>
                <input type="radio" id="4star" value="4" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="4star">&#9733;</label>
                <input type="radio" id="5star" value="5" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="5star">&#9733;</label>
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={deleteReviewClick}>Delete</button>
        </form>
    )

}

export default EditReviewPage;
