import React from 'react'
import { Link } from 'react-router-dom'
import mofongo from "./top-picks-imgs/mofongo.png"

const Pick = (props) => {
  return (
    <a href= {props.link}>
        <div>
            <img src={mofongo} alt="Rec" />
            <h3>{props.name}</h3>
        </div>
    </a>
  )
}

export default Pick