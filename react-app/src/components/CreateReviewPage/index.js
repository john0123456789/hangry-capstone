import { createReviewThunk, clearReviews } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function CreateReviewPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const user = useSelector(state => state.session.user)
    // const business = useSelector(state => state.businesses)

    const [user_id] = useState(user.id);
    const [review, setReview] = useState("");
    const [rating, setRating] = useState("");

    const createReviewClick = async (e) => {
        e.preventDefault();
        const url = window.location.href.split('/')
        const num = Number(url[url.length -1])

        const createReview = {
            user_id,
            business_id: num,
            review,
            rating
        }

        dispatch(createReviewThunk(createReview))
        dispatch(clearReviews());
        history.push(`/reviews/business/${num}`)
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
            <button type="submit"onClick={createReviewClick}>Post Review</button>
            <button type="button" onClick={handleCancelClick}>Cancel</button>
        </form>
    )

}

export default CreateReviewPage;
