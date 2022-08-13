// import { useEffect } from "react";
// import { useDispatch, useSelector} from "react-redux";
// import { getReviewsThunk } from "../../store/review";

// function StarRating({business}) {
//     const dispatch = useDispatch();

//     const business_id = business.id
//     const reviews = useSelector((state) => Object.values(state.reviews).filter(reviews => reviews.business_id === business_id))

//     let rating = 0;
//     const ratings = reviews.map((review) => review.rating);
//     if(ratings.length) {
//         ratings.forEach((ratingValue) => (rating = ratingValue + rating))
//         rating = rating / ratings.length;
//     }

//     let starImg = "";
//     if(rating === 0) {
//         starImg = "https://i.imgur.com/HdCWmlD.png"
//     } else if(rating > 0 && rating < 1.5) {
//         starImg = "https://i.imgur.com/CydbU6C.png"
//     } else if(rating > 1.49 && rating < 2) {
//         starImg = "https://i.imgur.com/6zFwyjT.png"
//     } else if(rating > 2 && rating < 2.5) {
//         starImg = "https://i.imgur.com/t7ikH97.png"
//     } else if(rating > 2.49 && rating < 3) {
//         starImg = "https://i.imgur.com/xNhKaX4.png"
//     } else if(rating > 3 && rating < 3.5) {
//         starImg = "https://i.imgur.com/DLJgTpr.png"
//     } else if(rating > 3.49 && rating < 4) {
//         starImg = "https://i.imgur.com/dtAELDe.png"
//     } else if(rating > 4 && rating < 4.5) {
//         starImg = "https://i.imgur.com/KL1NR67.png"
//     } else if(rating > 4.49 && rating < 5) {
//         starImg = "https://i.imgur.com/TOeeuSk.png"
//     } else {
//         starImg = "https://i.imgur.com/5MJPz2y.png"
//     }

//     useEffect(() => {
//         dispatch(getReviewsThunk(business.id))
//     }, [dispatch])

//     return (
//         <>
//             <img className="total-star-rating" src={starImg}></img>
//             <h1 className="review-length">{reviews.length} reviews</h1>
//         </>
//     )
// }

// export default StarRating;
