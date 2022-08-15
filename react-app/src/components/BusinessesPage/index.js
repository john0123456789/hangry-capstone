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
        <h1 className="business-page-header">Hangry? Check These Businesses Out!</h1>
        <div className="business-page">
            { businesses.map(business =>{
                return (
                    <div className="main-container">
                        <NavLink className="navlink-container" to={`/business/${business.id}`}>
                            <div className="business-container" key={business.id}>
                            <NavLink className="name" to={`/business/${business.id}`}><b className="businesses-btag">{business.name}</b></NavLink>
                            <StarRating business={business}/>
                            <h2 className="businesses-info">{business.address}, {business.city}, {business.state} {business.zipcode}</h2>
                            <h2 className="businesses-info">{business.phone_number}</h2>
                            <h2 className="businesses-info">{business.website}</h2>
                            </div>
                        </NavLink>
                    </div>
                    )
            })}
        </div>
    </>
  );
}

export default BusinessesPage;
