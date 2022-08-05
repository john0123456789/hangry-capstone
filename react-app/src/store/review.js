const GET_REVIEWS = "reviews/GET_REVIEWS"
const CREATE_REVIEW = "reviews/CREATE_REVIEW"
const DELETE_REVIEW = "reviews/DELETE_REVIEW"
const CLEAR_REVIEWS = "reviews/CLEAR_REVIEWS"

export const clearReviews = () => {
    return {
        type: CLEAR_REVIEWS,
    }
}

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    reviews
})

const createReview = (review) => ({
    type: CREATE_REVIEW,
    review
})

const deleteReview = (review) => ({
    type: DELETE_REVIEW,
    review
})

export const getReviewsThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/business/${id}`);
        const data = await response.json();
        dispatch(getReviews(data.reviews))
        return data.reviews;
}

export const createReviewThunk = (review) => async (dispatch) => {
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      headers: { 'Content-Type' : 'application/json' },
      body: JSON.stringify(review)
    });

    if (response.ok) {
      const newReview = await response.json()
      dispatch(createReview(newReview))
      return newReview;
    }
  };

export const deleteReviewThunk = (review, id) => async (dispatch) => {
    const response = await fetch(`/api/reviews/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const reviewId = await response.json(review)
        dispatch(deleteReview(reviewId))
        return reviewId;
    }
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_REVIEWS:
            action.reviews.forEach((review) => {
            return newState[review.id] = review;
            })
            return newState;
        case CREATE_REVIEW:
            if (!state[action.review.id]) {
                newState = {
                    ...state,
                    [action.review.id]: action.review,
                }
            }
            return newState;
        case DELETE_REVIEW:
            delete newState[action.review.id]
            return newState;
        case CLEAR_REVIEWS:
            return {};
        default:
            return state;
    }
}

export default reviewsReducer;
