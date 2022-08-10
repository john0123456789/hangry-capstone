import { getReviewsThunk } from "../../store/review";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import EditReviewModal from "../EditReviewPage/EditReviewModal"


function ReviewsPage({business}) {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user)
    const reviews = useSelector((state) => Object.values(state.reviews))

useEffect(() => {
    dispatch(getReviewsThunk(business.id));
}, [dispatch])


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
                <h2>{review.business_review}</h2>
                <h2>Rating: {review.rating}/5</h2>
                {review.user.id === user.id ? (
                <EditReviewModal business={business} review={review}/>): null }
                </div>
            )
        })}
    </div>
    </>
  );
 }
}

export default ReviewsPage;
