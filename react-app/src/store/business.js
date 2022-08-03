const GET_ALL_BUSINESSES = "businesses/GET_ALL_BUSINESSES";
const CREATE_BUSINESS = "businesses/CREATE_BUSINESS";
const DELETE_BUSINESS = "businesses/DELETE_BUSINESS";

const getAllBusinesses = (businesses) => ({
    type: GET_ALL_BUSINESSES,
    businesses
})

const createBusiness = (business) => ({
    type: CREATE_BUSINESS,
    business
})

const deleteBusiness = (business) => ({
    type: DELETE_BUSINESS,
    business
})

export const getAllBusinessesThunk = () => async (dispatch) => {
    const response = await fetch("/api/businesses");
        const data = await response.json();
        dispatch(getAllBusinesses(data.businesses))
        return data.businesses
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

export const deleteBusinessThunk = (business, id) => async (dispatch) => {
    const response = await fetch(`/api/businesses/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        const businessId = await response.json(business)
        dispatch(deleteBusiness(businessId))
        return businessId;
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
        case CREATE_BUSINESS:
            if (!state[action.business.id]) {
                newState = {
                    ...state,
                    [action.business.id]: action.business,
                }
            }
            return newState;
        case DELETE_BUSINESS:
            delete newState[action.business.id]
            return newState
        default:
            return state;
    }
}


export default businessesReducer;
