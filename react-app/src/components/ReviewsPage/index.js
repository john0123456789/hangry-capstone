import { getReviewsThunk } from "../../store/review";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function ReviewsPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const reviews = useSelector((state) => Object.values(state.reviews));

useEffect(() => {
    dispatch(getReviewsThunk());
}, [dispatch])




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
                </div>
            )
        })}
    </div>
    </>
  );
}

export default ReviewsPage;
