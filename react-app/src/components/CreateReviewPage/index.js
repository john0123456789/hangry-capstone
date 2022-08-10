import { createReviewThunk, clearReviews } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function CreateReviewPage({business, setShowModal}) {
    const dispatch = useDispatch();

    const user = useSelector(state => state.session.user)

    const [user_id] = useState(user.id);
    const [business_id] = useState(business.id)
    const [business_review, setBusinessReview] = useState("");
    const [rating, setRating] = useState("");

    const createReviewClick = async (e) => {
        e.preventDefault();

        const createReview = {
            user_id,
            business_id,
            business_review,
            rating
        }

        await dispatch(createReviewThunk(createReview))
        setShowModal(false);
    }

    return (
        <form className="review-form" onSubmit={createReviewClick}>
            <h1>Create Review</h1>
            <textarea type="text" placeholder="Your Review Here" value={business_review} onChange={(e) => setBusinessReview(e.target.value)}/>
            <select value={rating} onChange={(e) => setRating(parseInt(e.target.value, 10))}>
            {/* input radio button , name property to other radio buttons, give them the same name*/}
            {/* each radio button label,  star code &#9733; display none in css to hide radio*/}
            <option>Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <button type="submit">Post Review</button>
        </form>
    )

}

export default CreateReviewPage;
