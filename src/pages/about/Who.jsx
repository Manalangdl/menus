import chips from "./about-imgs/chips.png"
import React from 'react'

const Who = () => {
  return (
    <section id="who-sect" class="flex flex-between mb-w-100 reverse-col">

        <div class="who-txt mb-">
            <h2>Who we are</h2>
            <p>Cola Munchies is a website dedicated to satisfying your cravings and curiosity. If you ever find yourself in the Columbia region, struggling to find a spot, we are here to ease your worries.</p>
            
        </div>


        <div class="who-img img-div mb-w-100">
            <img src={chips} alt="Chips on sand"/> 
        </div>
    </section>
  )
}

export default Who