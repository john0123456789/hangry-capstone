import { deleteBusinessThunk, getAllBusinessesThunk } from "../../store/business";
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

const deleteBusinessClick = async (e) => {
    e.preventDefault();
    const buttonData = Number(e.target.id);
    for (const business of businesses) {
        if (business.id === buttonData) {
            dispatch(deleteBusinessThunk(business, buttonData))
            await dispatch (getAllBusinessesThunk())
            history.push("/businesses")
        }
    }
}

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
                <img alt="business_images" src={business.business_images.url}></img>
                <button type="button" id={business.id} onClick={deleteBusinessClick}>Delete</button>
                </div>
            )
        })}
    </div>
    </>
  );
}

export default BusinessesPage;
