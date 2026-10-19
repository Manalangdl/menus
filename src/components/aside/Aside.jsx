import React from 'react'
import "./aside.css";

const Aside = () => {
  return (
    <aside class="closed">

        <ul class="flex column evenly fs-24">
            <h1>ColaMunchies</h1>
            <a href="index.html"><li>Home</li></a>
            <a href="reviews.html"><li>Reviews</li></a>
            <a href="top-picks.html"><li>Top-picks</li></a>
            <a href="guide.html"><li>Guide</li></a>
            <a href="about.html"><li>About</li></a>
        </ul>
    </aside>
  )
}

export default Aside