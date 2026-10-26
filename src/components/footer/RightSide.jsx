import React from 'react'
import { Link } from "react-router-dom";
import insta from "./footer-imgs/insta.png"
import facebook from "./footer-imgs/facebook.png"
import twitter from "./footer-imgs/x.png"
import youtube from "./footer-imgs/youtube.png"

const RightSide = () => {
  return (
    <div className="footer-sect flex flex-between flex-column">
        <h3>Follow Along</h3>

        <div className="flex social-links flex-evenly">


            <a href="#"><img src={facebook} alt="Facebook"/></a>
            <a href="#"><img src={insta} alt="Instagram"/></a>
            <a href="#"><img src={twitter} alt="X"/></a>
            <a href="#"><img src={youtube} alt="YouTube"/></a>

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