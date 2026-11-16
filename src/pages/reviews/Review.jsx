import { Image } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import Modal from './Modal';

const Review = (props) => {

  const [reviewModal, setReviewModal] = useState(false);

  const stars = [];
  for (let i = 0; i < 5; i++){
      stars.push(i < props.rev.stars ? "★" : "☆")
  }

  return (

    <>
      {reviewModal ? <Modal rev={props.rev} setReviewModal={setReviewModal} /> : <></>}

      <div className="mb-w-100 review-card" onClick={() => { setReviewModal(true); }}>
          <div className="">
              <p className='author'>{props.rev.name} reviewed <a rel="noreferrer" target='_blank'>{props.rev.restaurant}</a></p>
          
              <div className="img-div"><img src={`https://colamunchies-backend.onrender.com/${props.rev.src}`} alt="Image is not found"/></div>

              <p className='review-txt'>"{props.rev.review}"</p>
          </div>

          <div className="review-bottom">

              <div className='stars'>
                {stars.map( (star) => (
                    <span>{star}</span>
                ))}
              </div>

              <p className='date'>{props.rev.month+1}/{props.rev.day}/{props.rev.year}</p>
          </div>
      </div>
  </>
  )
}

export default Review