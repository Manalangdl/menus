import { Image } from 'lucide-react'
import React from 'react'
import Inakaya from "./review-imgs/sushi.png"

const Review = (props) => {
  return (
    <div className="mb-w-100 review-card">
        <div className="">
            <p className='author'>{props.rev.name} reviewed <a href={props.rev.link} target='_blank'>{props.rev.restaurant}</a></p>
        
            <div className="img-div"><img src={Inakaya} alt="Image is not found"/></div>

            <p className='review-txt'>"{props.rev.review}"</p>
        </div>

        <div className="review-bottom">

            <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
            </div>

            <p className='date'>{props.rev.month+1}/{props.rev.day}/{props.rev.year}</p>
        </div>
    </div>
  )
}

export default Review