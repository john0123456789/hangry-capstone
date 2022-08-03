const GET_ALL_BUSINESSES = "businesses/GET_ALL_BUSINESSES";
const CREATE_BUSINESS = "businesses/CREATE_BUSINESS";

const getAllBusinesses = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    businesses
})

const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business
})

export const getAllBusinessesThunk = () => async (dispatch) => {
    const response = await fetch("/api/businesses");

    if (response.ok) {
        const businesses = await response.json();
        dispatch(getAllBusinesses(businesses.businesses))
    }
}

export const createBusinessThunk = (newBusiness) => async (dispatch) => {
    const response = await fetch("/api/businesses/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBusiness),
    });

    if (response.ok) {
        const business = await response.json();
        dispatch(createBusiness(business));
        return business;
    }
};

const initialState = {};

const businessesReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case GET_ALL_BUSINESSES:
            action.businesses.forEach((business) => {
                return newState[business.id] = business;
            })
            return newState;
        case CREATE_BUSINESS:
            if (!state[action.business.id]) {
                newState = {
                    ...state,
                    [action.business.id]: action.business,
                }
            }
            return newState;
        default:
            return state;
    }
}


export default businessesReducer;
