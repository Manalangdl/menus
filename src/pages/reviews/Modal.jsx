import React from 'react'

const Modal = (props) => {

    const stars = [];
    for (let i = 0; i < 5; i++){
        stars.push(i < props.rev.stars ? "★" : "☆")
    }

  return (
    <div id="modal" className="flex flex-column flex-evenly">
        <div id="modal-content" className="flex flex-column flex-evenly">
    
            <button className="exit" onClick={() => { props.setReviewModal(false) }}>X</button>

            <div className="img-div mb-w-100">
                <img src={`https://colamunchies-backend.onrender.com/${props.rev.src}`} alt='restaurant' />
            </div>
            
            <h1 className="title"> <a target='_blank' rel="noreferrer" href={props.rev.link}>{props.rev.restaurant}</a> review by {props.rev.name}</h1>

            <div className='stars'>
                {stars.map( (star) => (
                    <span>{star}</span>
                ))}
            </div>

            <h3>{props.rev.month + 1}/{props.rev.day}/{props.rev.year}</h3>

            <p>{props.rev.review}</p>
            
            
        </div>
    </div>
  )
}

export default Modal