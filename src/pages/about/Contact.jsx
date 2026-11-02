import React from 'react'
import { useState } from 'react';

const Contact = () => {

    const [result, setResult] = useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        setResult( "Please wait...")

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    setResult( json.message);
                } else {
                    console.log(response);
                    setResult( json.message);
                }
            })
            .catch(error => {
                setResult( "Something went wrong!");
            })
            .then(function() {
                event.target.reset();
                setTimeout(() => {
                    setResult("")
                }, 3000);
            });

        // const formData = new FormData(event.target);
        // formData.append("access_key", "80a420fe-5012-4720-a5db-b6c6069d4701");

        // const response = await fetch("https://api.web3forms.com/submit", {
        //     method: "POST",
        //     body: JSON.stringify(Object.fromEntries(formData))
        // });

        // const data = await response.json();

        // if (data.success) {
        //     setResult("Email Sent");
        //     // time buffer w/3 seconds
        //     setTimeout(()=>{setResult("");}, 3000);
            
        //     event.target.reset();
        // } else {
        //     setResult("Error");
        // }
    };

    return (
        <section className="contact-section">
            <div className="contact-intro">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

        <form className="contact-form" id="form" onSubmit={onSubmit}>

            <input type="hidden" name="access_key" value="80a420fe-5012-4720-a5db-b6c6069d4701" />
            <input type="hidden" name="subject" value="Contact Us" />

            <div className="form-group-container">
                <div className="form-group">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input id="name" name="name" className="form-input" placeholder="Your name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input id="email" name="email" className="form-input" placeholder="Your email" type="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input id="phone" name="phone" className="form-input" placeholder="Your number" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
                </div>
            </div>

            <div id="result">{result}</div>
            <button className="form-submit" type="submit">Send Message</button>
        </form>
    </section>
  )
}

export default Contact