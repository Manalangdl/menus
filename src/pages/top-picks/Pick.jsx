import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'lucide-react'

const Pick = (props) => {
  return (
    <Link href= {props.link}>
        <div>
            <Image src={props.src} alt="Rec" />
            <h3>{props.name}</h3>
        </div>
    </Link>
  )
}

export default Pick