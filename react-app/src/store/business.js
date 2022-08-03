const GET_ALL_BUSINESSES = "businesses/GET_ALL_BUSINESSES"

const getAllBusinesses = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    businesses
})

export const getAllBusinessesThunk = () => async (dispatch) => {
    const response = await fetch("/api/businesses");

    if (response.ok) {
        const businesses = await response.json();
        dispatch(getAllBusinesses(businesses.businesses))
    }
}

const initialState = {};

const businessesReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_BUSINESSES:
            action.businesses.forEach((business) => {
                return newState[business.id] = business;
            })
            return newState;
        default:
            return state;
    }
}


export default businessesReducer;
