import React, { useState } from 'react'
import locationImg from "./guide-imgs/dentsville.png"
import Cayce from "./guide-imgs/cayce.png";
import Downtown from "./guide-imgs/downtown.png";
import Dentsville from "./guide-imgs/dentsville.png";
import Irmo from "./guide-imgs/irmo.png";
import Rosewood from "./guide-imgs/rosewood.png";
import UofSCCampus from "./guide-imgs/on-campus.png";
import Modal from './Modal';

const imgs = {Downtown, Cayce, Dentsville, Irmo, Rosewood, UofSCCampus};

const Location = (props) => {

	const [active, setActive] = useState(false);
	
	return (
		<>
			{active ? (<Modal locationName={props.name} setActive={setActive}  />) : <></>}
			

			<div className="location-card" onClick={() => { setActive(true) }}>
				<div className="location-img">
					<img src={imgs[props.name]} alt='location'/>
				</div>
			
				<div className="location-name">{props.name}</div>
			</div>
		
		</>
		
	)
}

export default Location