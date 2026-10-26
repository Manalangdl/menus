import React from 'react'
import { Link } from 'react-router-dom'

const Where = () => {
  return (
    <section id="where-sect">
        <h2>Where to Start</h2>
        <div class="start-grid">

            <Link href="reviews.html" class="start-card">
                <h3>Reviews</h3>
                <p>Check out what the community has to say about the local food</p>

                <span>→</span>
            </Link>

            <Link href="top-picks.html" class="start-card">
                <h3>Top Picks</h3>
                <p>Browse through my personal recommendations in Cola</p>

                <span>→</span>
            </Link>

            <Link href="guide.html" class="start-card">
                <h3>Guide</h3>
                <p>Visit different areas of Columbia and what they have to offer</p>

                <span>→</span>
            </Link>

        </div>
    </section>
  )
}

export default Where