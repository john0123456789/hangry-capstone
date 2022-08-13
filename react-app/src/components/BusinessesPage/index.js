import { getAllBusinessesThunk } from "../../store/business";
import { useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import './index.css'

function BusinessesPage() {
    const dispatch = useDispatch();

    const businesses = useSelector((state) => Object.values(state.businesses));


useEffect(() => {
    dispatch(getAllBusinessesThunk());
}, [dispatch]);

return (
    <>
    <div className="business-page">
        <h1>Hangry? Check These Businesses Out!</h1>
        { businesses.map(business =>{
            return (
                <div key={business.id}>
                <NavLink className="name" to={`/business/${business.id}`} target="_blank" rel="noreferrer noopener"><b>{business.name}</b></NavLink>
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
