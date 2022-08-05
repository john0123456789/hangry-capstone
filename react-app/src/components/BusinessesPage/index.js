import { deleteBusinessThunk, getAllBusinessesThunk } from "../../store/business";
import { clearReviews } from "../../store/review";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function BusinessesPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const businesses = useSelector((state) => Object.values(state.businesses));


useEffect(() => {
    dispatch(getAllBusinessesThunk());
}, [dispatch]);

const deleteBusinessClick = (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    for (const business of businesses) {
        if (business.id === buttonData) {
            dispatch(deleteBusinessThunk(business, buttonData))
            history.push("/businesses")
        }
    }
}

const editBusinessClick = (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    history.push(`/businesses/${buttonData}`)
}

return (
    <>
    <div>
        <h1>BUSINESSES PAGE</h1>
        { businesses.map(business =>{
            const getReviewClick = async (e) => {
                e.preventDefault();
                await dispatch(clearReviews());
                const business_id = Number(e.target.id);
                history.push(`/reviews/business/${business_id}`)
            }
            const addReviewClick = (e) => {
                e.preventDefault();
                const business_id = Number(e.target.id);
                history.push(`/reviews/create/${business_id}`)
            }
            return (
                <div key={business.id}>
                <h2>{business.name}</h2>
                <h2>Address:{business.address}, {business.city}, {business.state} {business.zipcode}</h2>
                <h2>{business.phone_number}</h2>
                <h2>{business.website}</h2>
                <img alt="business_images" src={business.business_images.url}></img>
                <button type="button" id={business.id} onClick={getReviewClick}>Reviews</button>
                <button type="button" id={business.id} onClick={addReviewClick}>Add Review</button>
                <button type="button" id={business.id} onClick={editBusinessClick}>Edit</button>
                <button type="button" id={business.id} onClick={deleteBusinessClick}>Delete</button>
                </div>
            )
        })}
    </div>
    </>
  );
}

export default BusinessesPage;
