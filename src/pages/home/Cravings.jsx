import React from 'react'
import { Image } from 'lucide-react'
import sushi from "./home-imgs/sushi-circ.png"
import stars from "./home-imgs/stars.png"
import ramen from "./home-imgs/ramen-circ.png"
import bagel from "./home-imgs/bagel-circ.png"


const Cravings = () => {
  return (

    <section id="cravings">

        <h2>What I'm Craving...</h2>
        <p className="sect-subtitle">Top foods I cannot get enough of</p>


        <div className="flex food-cards">

            <div className="food-card">
                <div className="food-img img-div">
                    <img src={sushi} alt="Sushi platter" />
                </div>
                

                <h3>Inakaya</h3>
                <p>Sushi Platter</p>

                <div className="stars-1 img-div">
                    <img src={stars} alt="stars" />
                </div>

            </div>

            <div className="food-card">
                <div className="food-img img-div menkoi">
                    <img src={ramen} alt="Bowl of ramen" />
                </div>

                <h3>Menkoi Ramen</h3>
                <p>Spicy Tonkotsu Ramen</p>

                <div className="stars-1 img-div">
                    <img src={stars} alt="stars" />
                </div>
            </div>
            
            <div className="food-card">
                <div className="food-img img-div">
                    <img src={bagel} alt="Bagel" />
                </div>


                <h3>Q's Corner Café</h3>
                <p>BEC Bagel</p>

                <div className="stars-1 img-div">
                    <img src={stars} alt="stars" />
                </div>
                
            </div>

        </div>

    </section>
  )
}

export default Cravings