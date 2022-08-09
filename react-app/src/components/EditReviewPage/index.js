import { updateReviewThunk, getReviewsThunk, deleteReviewThunk, clearReviews } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function EditReviewPage({review, business}) {
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
    }

    const deleteReviewClick = async (e) => {
        e.preventDefault()

        await dispatch(deleteReviewThunk(review.id))
        await dispatch(clearReviews())
        await dispatch(getReviewsThunk(business.id))
    }




    return (
        <form className="review-form" onSubmit={updateReviewClick}>
            <h1>Edit Review</h1>
            <textarea type="text" placeholder="Your Review Here" value={business_review} onChange={(e) => setBusinessReview(e.target.value)}/>
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}>
            <option>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={deleteReviewClick}>Delete</button>
        </form>
    )

}

export default EditReviewPage;
