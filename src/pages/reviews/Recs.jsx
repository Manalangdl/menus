import React from 'react'

const Recs = () => {
  return (
    <section className="recommend-sect">
        <div className="container">
            <h2>Have a Recommended Place?</h2>

            <div className="form flex">

                <div className="form-inputs form-column mb-center">
                    <h3>Leave a Review</h3>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Your name"/>

                        <label for="email">Email</label>
                        <input type="text" id="email" placeholder="Your email"/>

                        <label for="restaurant">Restaurant</label>
                        <input type="text" id="restaurant" placeholder="Name of Restaurant"/>

                        <label for="review">Review</label>
                        <textarea id="review" placeholder="Your review..."></textarea>

                        <button id="submit" type="submit">Submit Review</button>
                    </div>
                </div>

                <div className="upload-column flex flex-column flex-center">
                    <button type="button" className="img-upload">
                        <span>+</span>
                    </button>
                    <p>Add Image</p>
                </div>

                <div className="rating-column flex flex-column flex-center">
                    <h3 id="star-h">Stars</h3>
                    <div className="rating-stars flex no-col">
                        <button value="1" type="button">☆</button>
                        <button value="2" type="button">☆</button>
                        <button value="3" type="button">☆</button>
                        <button value="4" type="button">☆</button>
                        <button value="5" type="button">☆</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Recs