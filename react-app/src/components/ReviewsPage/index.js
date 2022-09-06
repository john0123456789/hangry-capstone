import { getReviewsThunk } from "../../store/review";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import EditReviewModal from "../EditReviewPage/EditReviewModal"
import './index.css'


function ReviewsPage({business}) {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user)
    const business_id = business.id
    const reviews = useSelector((state) => Object.values(state.reviews).filter(reviews => reviews.business_id === business_id))
    const sortReviews = reviews.sort().reverse()

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
        <h1 className="reviews-header">Reviews</h1>
        { sortReviews.map(review => {
            return (
                <div className="review-container" key={review.id}>
                <h2 className="reviewer-header">{review.user.username}:</h2>
                    {review.user.id === user.id ? (
                    <EditReviewModal business={business} review={review}/>): null }
                <div className="star-container">
                    {review.rating === 5 && (
                        <label className="stars">&#9733; &#9733; &#9733; &#9733; &#9733;</label>
                    )}
                    {review.rating === 4 && (
                        <label className="stars">&#9733; &#9733; &#9733; &#9733;</label>
                     )}
                    {review.rating === 3 && (
                        <label className="stars">&#9733; &#9733; &#9733;</label>
                    )}
                    {review.rating === 2 && (
                        <label className="stars">&#9733; &#9733;</label>
                    )}
                    {review.rating === 1 && (
                         <label className="stars">&#9733;</label>
                    )}
                    {new Date(review.created_at).toLocaleDateString('en-US')}
                </div>
                <div>
                    <h3 className="review-content">{review.business_review}</h3>
                </div>
                </div>
            )
        })}
    </div>
    </>
  );
 }
}

export default ReviewsPage;
