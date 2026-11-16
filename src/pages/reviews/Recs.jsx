import React from 'react'
import { useState } from 'react'

const Recs = (props) => {

    const [stars, setStars] = useState("0");

    const [body, setBody] = useState(() => {

        const today = new Date();
        return {["stars"]: 0,["month"]: Number(today.getMonth()), ["day"]: Number(today.getDate()), ["year"]: Number(today.getFullYear())}
    });
    const [result, setResult] = useState("");

    const FormSubmission = async (e) => {
        e.preventDefault();

        setResult("Sending...");

        const formData = new FormData();
        formData.append("name", body.name || "");
        formData.append("restaurant", body.restaurant || "");
        formData.append("review", body.review || "");
        formData.append("stars", body.stars || 5);
        formData.append("month", body.month);
        formData.append("day", body.day);
        formData.append("year", body.year);
        formData.append("link", body.link || "");

        if (body.src) {
        formData.append("src", body.src); // Must match multer's "img" field name!
        }

        // adding the current date when review was posted here
        await console.log(body);

        const response = await fetch("https://colamunchies-backend.onrender.com/api/reviews", {
            method: "Post",
            body: formData
        })

        if (response.status === 200) {
            const newReview = await response.json();
            setResult("Review has been Added");
            e.target.reset();
            setBody(() => {
                const today = new Date();
                return {["stars"]: 0,["month"]: Number(today.getMonth()), ["day"]: Number(today.getDate()), ["year"]: Number(today.getFullYear())}
            })
            setStars(0);
            props.setReviews((prev) => ( [...prev, newReview] ))
        }

        else {
            console.log("error: ", response);
            setResult(response.message);
        }

        
    }

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name == "stars") {
            value = Number(value);
            setStars(value);
        }

        setBody((prev) => ( {...prev, [name]: value} ))
    }

    const handleImgChange = (e) => {
        const name = e.target.name;
        const value = e.target.files[0];

        setBody((prev) => ( {...prev, [name]: value} ))
    }

  return (
    <section className="recommend-sect">
        <form className="container" onSubmit={FormSubmission}>
            <h2>Have a Recommended Place?</h2>

            <div className="form flex">

                <div className="form-inputs form-column mb-center">
                    <h3>Leave a Review <br/> <span>{result}</span></h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name='name' onChange={handleChange} placeholder="Your name"/>

                        <label htmlFor="link">Link</label>
                        <input type="text" id="link" name='link' onChange={handleChange} placeholder="Restaurant link"/>

                        <label htmlFor="restaurant">Restaurant</label>
                        <input type="text" id="restaurant" name='restaurant' onChange={handleChange} placeholder="Name of Restaurant"/>

                        <label htmlFor="review">Review</label>
                        <textarea name='review' id="review" onChange={handleChange} placeholder="Your review..."></textarea>

                        <button id="submit" type="submit">Submit Review</button>
                    </div>
                </div>

                <div className="upload-column flex flex-column flex-center">
                    <div className='img-upload img-div'>
                        {(body.src != null) ? <img src= {body.src != null ? URL.createObjectURL(body.src) : ""} alt=''/> : <></>}
                        <input type='file' id='src' name='src' accept='image/' onChange={handleImgChange} placeholder='+' />
                    </div>
                    <p>Add Image</p>
                </div>

                <div className="rating-column flex flex-column flex-center">
                    <h3 id="star-h">{stars} Stars</h3>
                    <div className="rating-stars flex no-col" >
                        <button value="1" type="button" name='stars' onClick={handleChange}>★</button>
                        <button value="2" type="button" name='stars' onClick={handleChange}>★</button>
                        <button value="3" type="button" name='stars' onClick={handleChange}>★</button>
                        <button value="4" type="button" name='stars' onClick={handleChange}>★</button>
                        <button value="5" type="button" name='stars' onClick={handleChange}>★</button>
                    </div>
                </div>

            </div>
        </form>
    </section>
  )
}

export default Recs