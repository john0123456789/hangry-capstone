import { getAllBusinessesThunk } from "../../store/business";
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

return (
    <>
    <div>
        <h1>BUSINESSES PAGE</h1>
        { businesses.map(business =>{
            return (
                <div key={business.id}>
                <h2>{business.name}</h2>
                <h2>Address:{business.address}, {business.city}, {business.state} {business.zipcode}</h2>
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
