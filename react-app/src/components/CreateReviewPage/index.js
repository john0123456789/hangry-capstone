import { createReviewThunk } from "../../store/review";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import './index.css'

function CreateReviewPage({business, setShowModal}) {
    const dispatch = useDispatch();

    let errorsObj = {content: ''}
    const [reactErrors, setReactErrors] = useState(errorsObj);

    const user = useSelector(state => state.session.user)

    const [user_id] = useState(user.id);
    const [business_id] = useState(business.id)
    const [business_review, setBusinessReview] = useState("");
    const [rating, setRating] = useState("");

    const createReviewClick = async (e) => {
        e.preventDefault();

        let error = false;
        errorsObj = {...errorsObj};
        if(business_review === '') {
            errorsObj.business_review = "Review cannot be empty."
            error = true;
        } else if(business_review.length < 3 || business_review.length > 250) {
            errorsObj.business_review = "Review must be greater than 3 characters and under 250."
            error = true;
        }
        if(rating === '') {
            errorsObj.rating = "Please select a rating."
            error = true;
        }

        setReactErrors(errorsObj);

        if(!error) {
        const createReview = {
            user_id,
            business_id,
            business_review,
            rating
        }

        await dispatch(createReviewThunk(createReview))
        setShowModal(false);
    }
}

    return (
        <form className="review-form" onSubmit={createReviewClick}>
            <h1>Add Review</h1>
            <h3 className="addreviewrequire">* field required</h3>
            <div className="reviewerrors">
                {Object.values(reactErrors).map((error, idx) => <ul key={idx}>{error}</ul>)}
            </div>
            <label className="addreviewrequire">*</label>
            <label className="createreview-labels">Leave your review below!</label>
            <textarea type="text" className="reviewarea" placeholder="Your Review Here" value={business_review} onChange={(e) => setBusinessReview(e.target.value)}/>
            <label className="addreviewrequire">*</label>
            <label className="createreview-labels">What did you think of this business?</label>
            <div className="star-rating">
                <input type="radio" id="5star" value="5" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="5star">&#9733;</label>
                <input type="radio" id="4star" value="4" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="4star">&#9733;</label>
                <input type="radio" id="3star" value="3" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="3star">&#9733;</label>
                <input type="radio" id="2star" value="2" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="2star">&#9733;</label>
                <input type="radio" id="1star" value="1" name="stars" onChange={(e) => setRating(parseInt(e.target.value, 10))}/>
                <label htmlFor="1star">&#9733;</label>
            </div>
            <button className="createreviewbutton" type="submit">Post Review</button>
        </form>
    )

}

export default CreateReviewPage;
