import React, { useState, useEffect } from 'react'
import Review from './Review'
import axios from "axios";


const Revs = ({reviews, setReviews}) => {

    // reviews = props.reviews;
    // setReviews = props.setReviews;

    useEffect(()=>{
        const loadReviews = async () => {
            const response = await axios.get("https://colamunchies-backend.onrender.com/api/reviews")
            setReviews(response.data);
        };
        loadReviews();
    },[]);

    const [max, setMax] = useState(true);

	return (

		<section className="review-sect">
			<div className="">
				<div className="review-h flex flex-between no-col mb-w-100">
					<h2>FRESH FROM OUR COMMUNITY</h2>
					<p className="view-all" 
                    onClick= { () => { setMax(prev => !prev) } }
                    >View All</p>
				</div>

				{/* Make component and Generate reviews inside */}
				<div className={`review-grid flex flex-evenly flex-wrap ${max ? "max" : ""}`}>

					{/* <Review rev = {Reviews[0]}/>
					<Review rev = {Reviews[1]}/>
					<Review rev = {Reviews[2]}/>
					<Review rev = {Reviews[3]}/>
					<Review rev = {Reviews[4]}/>
					<Review rev = {Reviews[5]}/>
					<Review rev = {Reviews[6]}/>
					<Review rev = {Reviews[7]}/> */}
                    {reviews.map( (rev) => (
                        <Review key={rev.id} rev={rev}/>
                    ))}
				</div>
				
			</div>
		</section>
	)
}

export default Revs