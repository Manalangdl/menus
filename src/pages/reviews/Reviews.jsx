import Hero from "./Hero";
import Recs from "./Recs";
import "./Reviews.css";
import Revs from "./Revs";
import { useState } from "react";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    return (
        <>
            <Hero/>
            <Revs reviews={reviews} setReviews={setReviews} />
            <Recs setReviews={setReviews}/>
        </>
    )
};

export default Reviews;