import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about" class="flex flex-column flex-center">
        <h2>Made for all Food Lovers</h2>
        <p>Cola Munchies is dedicated to satisfying your craving and curiosity. We are here to help you explore various cuisines, finding local sit-down restaurants, quick bites, and overall quality experiences.</p>
    
        <Link href="about.html" class="pink-btn">Find out More →</Link>
    </section>
  )
}

export default About