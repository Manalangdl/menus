import React, { useState } from 'react'
import Location from './Location'
import Modal from './Modal';

const Locations = () => {
  return (

    <>

      <section id="locations">
          <h1>Popular Food Locations</h1>
          <div className="location-grid">

              <Location src={"guide-imgs/downtown.png"} name="Downtown"/>
              <Location src={"guide-imgs/cayce.png"} name="Cayce"/>
              <Location src={"guide-imgs/rosewood.png"} name="Rosewood"/>
              <Location src={"guide-imgs/on-campus.png"} name="UofSCCampus"/>
              <Location src={"guide-imgs/dentsville.png"} name="Dentsville"/>
              <Location src={"guide-imgs/irmo.png"} name="Irmo"/>
          </div>
      </section>
    </>
  )
}

export default Locations