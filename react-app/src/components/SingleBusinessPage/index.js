import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllBusinessesThunk } from '../../store/business';
import EditBusinessModal from '../EditBusinessPage/EditBusinessModal'
import ReviewsPage from "../ReviewsPage";
import CreateReviewModal from "../CreateReviewPage/CreateReviewModal";


function SingleBusinessPage() {
    const dispatch = useDispatch();

    const url = window.location.href.split("/");
    const num = Number(url[url.length - 1]);

    const user = useSelector((state) => state.session.user)
    const business = useSelector((state) => Object.values(state.businesses).find((businesses) => businesses?.id === num))

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])

    if (!business) {
        return (
            <h1 className="no-business">Oops! There is no longer a business here!</h1>
        );
    } else {
    return (
        <>
            <div >
                <h1>Business</h1>
                    <>
                        <>
                        <div class="business-container">
                            <h2> {business.name} </h2>
                            <h2> {business.address} </h2>
                            <h2> {business.city} </h2>
                            <h2> {business.state} </h2>
                            <h2> {business.phone_number} </h2>
                            <h2> {business.website} </h2>
                            {business.user_id === user.id ? (
                            <div>
                                <EditBusinessModal business={business}/>
                            </div>
                            ): null  }
                            <div>
                                <CreateReviewModal business={business}/>
                            </div>
                            <div>
                                <ReviewsPage business={business}/>
                            </div>
                            </div>
                        </>
                    </>
            </div>
        </>
    )
  }
}
export default SingleBusinessPage;
