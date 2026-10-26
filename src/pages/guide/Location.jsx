import React from 'react'
import locationImg from "./guide-imgs/dentsville.png"

const Location = (props) => {
  return (
    <div className="location-card">
        <div className="location-img">
            <img src={locationImg} alt='location'/>
        </div>

        <div className="location-name">{props.name}</div>
    </div>
  )
}

export default Location