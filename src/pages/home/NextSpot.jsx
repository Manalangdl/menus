import React from 'react'

const NextSpot = () => {
  return (
    <section id="next-spot">
        <h2>Find Your Next Spot</h2>

        <div class="flex spot-container flex flex-evenly">

            <div class="spot-card flex flex-column flex-evenly mb-w-100">
                <div class="img-div mb-w-100">
                    <Image src="home-imgs/home-review.png" alt="Reviews"/>
                </div>
                
                <h3>Restaurant Reviews</h3>
                <p>Follow along our community and their experiences.</p>
                <a href="reviews.html" class="pink-btn">View Reviews →</a>
            </div>

            <div class="spot-card flex flex-column flex-evenly mb-w-100">
                <div class="img-div mb-w-100">
                    <Image src="home-imgs/home-eats.png" alt="Pizza"/>
                </div>
                
                <h3>Best Eats</h3>
                <p>Check out my top picks by category.</p>
                <a href="top-picks.html" class="pink-btn">Try Next →</a>
            </div>

        </div>

    </section>
  )
}

export default NextSpot