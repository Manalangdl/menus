import React from 'react'
import { Image } from 'lucide-react'

const Location = (props) => {
  return (
    <div className="location-card">
        <div className="location-img">
            <Image src={props.src} alt='location'/>
        </div>

        <div className="location-name">{props.name}</div>
    </div>
  )
}

export default Location