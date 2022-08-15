import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { getAllBusinessesThunk } from '../../store/business';
import EditBusinessModal from '../EditBusinessPage/EditBusinessModal'
import ReviewsPage from "../ReviewsPage";
import CreateReviewModal from "../CreateReviewPage/CreateReviewModal";
import { BsTelephoneFill } from 'react-icons/bs';
import { BsGlobe2 } from 'react-icons/bs';
import { TbAddressBook } from 'react-icons/tb';
import './index.css'


function SingleBusinessPage() {
    const dispatch = useDispatch();

    const url = window.location.href.split("/");
    const num = Number(url[url.length - 1]);

    const user = useSelector((state) => state.session.user)
    const business = useSelector((state) => Object.values(state.businesses).find((businesses) => businesses?.id === num))

    const business_id = business.id
    const reviews = useSelector((state) => Object.values(state.reviews).filter(reviews => reviews.business_id === business_id))

    let rating = 0;
    const ratings = reviews.map((review) => review.rating);
    if(ratings.length) {
        ratings.forEach((ratingValue) => (rating = ratingValue + rating))
        rating = rating / ratings.length;
    }

    let starImg = "";
    if(rating === 0) {
        starImg = "https://i.imgur.com/HdCWmlD.png"
    } else if(rating > 0 && rating < 1.5) {
        starImg = "https://i.imgur.com/CydbU6C.png"
    } else if(rating > 1.49 && rating < 2) {
        starImg = "https://i.imgur.com/6zFwyjT.png"
    } else if(rating > 1.99 && rating < 2.5) {
        starImg = "https://i.imgur.com/t7ikH97.png"
    } else if(rating > 2.49 && rating < 3) {
        starImg = "https://i.imgur.com/xNhKaX4.png"
    } else if(rating > 2.99 && rating < 3.5) {
        starImg = "https://i.imgur.com/DLJgTpr.png"
    } else if(rating > 3.49 && rating < 4) {
        starImg = "https://i.imgur.com/dtAELDe.png"
    } else if(rating > 3.99 && rating < 4.5) {
        starImg = "https://i.imgur.com/KL1NR67.png"
    } else if(rating > 4.49 && rating < 5) {
        starImg = "https://i.imgur.com/TOeeuSk.png"
    } else {
        starImg = "https://i.imgur.com/5MJPz2y.png"
    }

    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    }, [dispatch])

    // if (!business) {
    //     return (
    //         <h1 className="no-business">Oops! There is no business here!</h1>
    //     );
    // } else {
    return (
        <>
            <div className="singlebusiness-container">
                <div className="singlebusiness-header">
                    <h1>{business.name}</h1>
                    <div className="total-star-rating">
                        <div className="star-img">
                            <img src={starImg}></img>
                        </div>
                            <a className="reviews-length">
                                {reviews.length} reviews
                            </a>
                    </div>
                </div>
                    <>
                        <>
                        <div>
                            <div>
                                <CreateReviewModal business={business}/>
                            </div>
                            <div>
                            {business.user_id === user.id ? (
                            <div>
                                <EditBusinessModal business={business}/>
                            </div>
                            ): null  }
                                <ReviewsPage business={business}/>
                            </div>
                            <div className="info-box">
                                <div className="info"><BsGlobe2/> {business.website} </div>
                                <div className="info"><BsTelephoneFill/> {business.phone_number} </div>
                                <div className="info"><TbAddressBook/> {business.address}, {business.city}, {business.state} {business.zipcode} </div>
                            </div>
                            </div>
                        </>
                    </>
            </div>
        </>
    )
  }
// }
export default SingleBusinessPage;
