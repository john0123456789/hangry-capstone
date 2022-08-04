const GET_REVIEWS = "reviews/GET_REVIEWS"

const getReviews = (reviews) => ({
    type: GET_REVIEWS,
    reviews
})

export const getReviewsThunk = () => async (dispatch) => {
    const response = await fetch(`/api/reviews`);
        const data = await response.json();
        dispatch(getReviews(data.reviews))
        return data.reviews;
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
        default:
            return state;
    }
}

export default reviewsReducer;
