import { updateReviewThunk, clearReviews } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";

function EditReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const user = useSelector(state => state.session.user)
    const business = useSelector(state => state.businesses)
    const reviews = useSelector(state => state.reviews)
    const singleReview = reviews[id]

    const [user_id] = useState(user.id);
    const [business_id] = useState(business.id)
    const [review, setReview] = useState(singleReview.review);
    const [rating, setRating] = useState(singleReview.rating);

    const updateReviewClick = async (e) => {
        e.preventDefault();

        const createReview = {
            user_id,
            business_id,
            review,
            rating
        }

        await dispatch(updateReviewThunk(createReview, singleReview.id))
        await dispatch(clearReviews());
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        history.push("/businesses")
    }

    return (
        <form className="review-form">
            <h1>Create Review</h1>
            <textarea type="text" placeholder="Your Review Here" value={review} onChange={(e) => setReview(e.target.value)}/>
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}>
            <option>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <button type="submit"onClick={updateReviewClick}>Save Changes</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
    )

}

export default EditReviewPage;
