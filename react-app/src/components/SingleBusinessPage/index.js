import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllBusinessesThunk } from '../../store/business';
import EditBusinessPage from '../EditBusinessPage/index'
import ReviewsPage from "../ReviewsPage";
import CreateReviewPage from "../CreateReviewPage";


function SingleBusinessPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const url = window.location.href.split("/");
    const num = Number(url[url.length - 1]);
    
    const business = useSelector((state) => Object.values(state.businesses).find((businesses) => businesses?.id === num))

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])

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
                            <div>
                                <EditBusinessPage business={business}/>
                            </div>
                            <div>
                                <CreateReviewPage business={business}/>
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
export default SingleBusinessPage;
