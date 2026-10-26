import React from 'react'

const Revs = () => {
	return (

		<section class="review-sect">
			<div class="">
				<div class="review-h flex flex-between no-col mb-w-100">
					<h2>FRESH FROM OUR COMMUNITY</h2>
					<p class="view-all" onclick="document.querySelector('.review-grid').classList.toggle('max')">View All</p>
				</div>

				{/* Make component and Generate reviews inside */}
				<div class="review-grid flex flex-evenly flex-wrap max">


				</div>
				
			</div>
		</section>
	)
}

export default Revs