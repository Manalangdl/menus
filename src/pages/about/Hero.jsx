import React from 'react'
import AboutHero from "./about-imgs/about-h.png"

const Hero = () => {
  return (
    <section id="hero" class="flex flex-between mb-w-100">

        <div class="hero-left flex flex-column flex-between astart mb-w-100">

            <h1 class="hero-text mb-w-100">About Us</h1>
            <p>Learn more about the origin of Cola Munchies and our goal to satisfy your needs while exceeding expectations.</p>
        </div>
        
        <div class="img-div hero-right mb-w-100">
            <img src={AboutHero} alt="Food eating at table"/>
        </div>

    </section>
  )
}

export default Hero