import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "./home-imgs/hero1.png"

const Hero = () => {
  return (
    <section id="hero" className="flex flex-between w-100">

                
                <div id="hero-left" className="flex flex-column h-100 flex-evenly astart mb-w-100">

                    <h1 className="hero-text mb-w-100">Food tailored for the best taste buds</h1>
                    <p className="hero-text mb-w-100">Local foods. Columbia, SC</p>
                    

                   
                    <div className="flex hero-btns mb-w-100 no-col">
                        <Link href="reviews.html" className="pink-btn">Explore Reviews →</Link>
                        <Link href="about.html" className="contact-btn">Contact Us</Link>
                    </div>
                </div>
               
                
                <div className="hero-img img-div mb-w-100">
                    <img src={heroImg} alt='hero' />
                </div>

            </section>
  )
}

export default Hero