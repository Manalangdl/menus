import React from 'react'
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div className="footer-sect flex flex-between flex-column">
        <h3>Follow Along</h3>

        <div className="flex social-links flex-evenly">


            {/* <a href="#"><img src="home-imgs/facebook.png" alt="Facebook"></a>
            <a href="#"><img src="home-imgs/insta.png" alt="Instagram"></a>
            <a href="#"><img src="home-imgs/x.png" alt="X"></a>
            <a href="#"><img src="home-imgs/youtube.png" alt="YouTube"></a> */}

        </div>

        <div className="w-100">    
            <ul className="footer-nav w-100 flex flex-evenly">
                <Link href="index.html">Home</Link>
                <Link href="reviews.html">Reviews</Link>
                <Link href="top-picks.html">Top Picks</Link>
                <Link href="guide.html">Guide</Link>
                <Link href="about.html">About</Link>
            </ul>
        </div>
    </div>
  )
}

export default RightSide