import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from 'react-router-dom';
import "./aside.css"

const Aside = (props) => {
  return (
    
    
    <AnimatePresence>
      {props.mbMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
        <aside>

          <ul className="flex column evenly fs-24">
            <h1>ColaMunchies</h1>
              <li onClick={() => { props.setMbMenu(false) }}><NavLink to="/">Home</NavLink></li>
              <li onClick={() => { props.setMbMenu(false) }}><NavLink to="/reviews">Reviews</NavLink></li>
              <li onClick={() => { props.setMbMenu(false) }}><NavLink to="/top-picks">Top Picks</NavLink></li>
              <li onClick={() => { props.setMbMenu(false) }}><NavLink to="/guide">Guide</NavLink></li>
              <li onClick={() => { props.setMbMenu(false) }}><NavLink to="/about">About</NavLink></li>
          </ul>
        </aside>
       
    </motion.div>
      )}
    </AnimatePresence>
     
     
  )
}

export default Aside