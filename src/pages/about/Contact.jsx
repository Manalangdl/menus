import React from 'react'

const Contact = () => {
  return (
    <section class="contact-section">
        <div class="contact-intro">
            <h2 class="contact-title">Get in Touch</h2>
            <p class="contact-description">
            Fill out the form below and we'll get back to you as soon as possible.
            </p>
        </div>

        <form class="contact-form" id="form" action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="80a420fe-5012-4720-a5db-b6c6069d4701" />
            <input type="hidden" name="subject" value="Contact Us" />

            <div class="form-group-container">
                <div class="form-group">
                    <label for="name" class="form-label">Name</label>
                    <input id="name" name="name" class="form-input" placeholder="Your name" type="text" />
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" class="form-input" placeholder="Your email" type="email" />
                </div>
                <div class="form-group">
                    <label for="phone" class="form-label">Phone</label>
                    <input id="phone" name="phone" class="form-input" placeholder="Your number" type="text" />
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Message</label>
                    <textarea class="form-textarea" id="message" name="message" placeholder="Your message"></textarea>
                </div>
            </div>

            <div id="result"></div>
            <button class="form-submit" type="submit">Send Message</button>
        </form>
    </section>
  )
}

export default Contact