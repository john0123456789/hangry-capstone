import { getReviewsThunk, deleteReviewThunk, clearReviews } from "../../store/review";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function ReviewsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const reviews = useSelector((state) => Object.values(state.reviews));

    const url = window.location.href.split("/");
    const num = Number(url[url.length -1]);

useEffect(() => {
    dispatch(getReviewsThunk(num));
}, [dispatch, num])

const editReviewClick = (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    history.push(`/reviews/${buttonData}`)
}

const deleteReviewClick = async (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    for (const review of reviews) {
        if (review.id === buttonData) {
            await dispatch(deleteReviewThunk(review, buttonData))
            await dispatch(getReviewsThunk(num))
            alert("Deleting")
        }
    }
}

if (reviews.length === 0) {
    return (
        <h1 className="no-reviews">Be the first to add a review for this business!</h1>
    );
} else {
    return (
        <>
    <div>
        <h1>REVIEWS PAGE</h1>
        { reviews.map(review => {
            return (
                <div key={review.id}>
                <h2>Review by {review.user.username} for {review.business.name}:</h2>
                <h2>{review.review}</h2>
                <h2>Rating: {review.rating}/5</h2>
                <button type="button" id={review.id} onClick={editReviewClick}>Edit</button>
                <button type="button" id={review.id} onClick={deleteReviewClick}>Delete</button>
                </div>
            )
        })}
    </div>
    </>
  );
 }
}

export default ReviewsPage;
