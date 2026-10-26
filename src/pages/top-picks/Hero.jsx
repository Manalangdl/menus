import React from 'react'
import lasHeader from "./top-picks-imgs/lasagna-hero.png"

const Hero = () => {
  return (
    <section id="hero" class="flex flex-between reverse-col">

        <div class="hero-left flex flex-column flex-between astart mb-w-100">

            <h1 class="hero-text mb-w-100">Top Picks</h1>
            <p>What is your go to cuisine? Are you looking for casual or fine-dining? Everyone has different taste buds, but let me help find food just for you!</p>
            
        </div>
        
        <div class="img-div hero-right mb-w-100">
            <img src={lasHeader} alt="Lasagna with textbox"/>
        </div>

    </section>
  )
}

export default Hero