import { getAllBusinessesThunk } from "../../store/business";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { clearReviews } from "../../store/review";
import './index.css'
import StarRating from "./StarRating";

function BusinessesPage() {
    const dispatch = useDispatch();

    const businesses = useSelector((state) => Object.values(state.businesses));


useEffect(() => {
    dispatch(getAllBusinessesThunk());
    dispatch(clearReviews())
}, [dispatch]);

return (
    <>
    <div className="business-page">
        <h1>Hangry? Check These Businesses Out!</h1>
        { businesses.map(business =>{
            return (
                <div key={business.id}>
                <NavLink className="name" to={`/business/${business.id}`}><b>{business.name}</b></NavLink>
                <StarRating business={business}/>
                <h2>{business.address}, {business.city}, {business.state} {business.zipcode}</h2>
                <h2>{business.phone_number}</h2>
                <h2>{business.website}</h2>
                </div>
            )
        })}
    </div>
    </>
  );
}

export default BusinessesPage;
