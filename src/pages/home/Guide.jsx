import React from 'react'

const Guide = () => {
  return (
    <section id="quick-guide">

        <h2>Quick Guide to Columbia</h2>
        <p id="guide-subt">Top rated restaurants based on location</p>


        <div class="flex guide-container">

      
            <div class="restaurant-list flex flex-column">

                <button class="restaurant"
                        // onclick="document.querySelector('#home-map iframe').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4126.099790660778!2d-81.0130285235343!3d33.99841477317718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb634b093669%3A0x4a6c05c85edd7449!2sBackstreets%20Grill!5e1!3m2!1sen!2sus!4v1791135711139!5m2!1sen!2sus'"
                >1. Backstreets Grill | Devine St.</button>
                
                <button class="restaurant"
                        // onclick="document.querySelector('#home-map iframe').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510.9272916396858!2d-81.03095133668764!3d33.993254480706554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bbb9635f461d%3A0x3afd315120b7099a!2sJJ%20Tea%20House!5e1!3m2!1sen!2sus!4v1791135855659!5m2!1sen!2sus'"
                >2. JJ's Teahouse | Blossom St.</button>
                <button class="restaurant"
                        //onclick="document.querySelector('#home-map iframe').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8252.16100589586!2d-81.0193808235342!3d33.9988118731771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bacc4f7ad8b5%3A0xc2af1597a77e1ee4!2sPho%20Viet%20Restaurant!5e1!3m2!1sen!2sus!4v1791177007871!5m2!1sen!2sus'">
                >3. Pho Viet | Devine St.
                </button>
                <button class="restaurant"
                        // onclick="document.querySelector('#home-map iframe').src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4127.242594275325!2d-80.94259492353503!3d33.974879173186295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8b1004a2873bf%3A0xa4de87b6ea172baa!2sMr%20Toy%20Hibachi!5e1!3m2!1sen!2sus!4v1791176872649!5m2!1sen!2sus'">
                >4. Mr. Toy's Hibachi | Leesburg Rd.
                </button>

            </div>

    
            <div id="home-map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4126.099790660778!2d-81.0130285235343!3d33.99841477317718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8bb634b093669%3A0x4a6c05c85edd7449!2sBackstreets%20Grill!5e1!3m2!1sen!2sus!4v1791135711139!5m2!1sen!2sus" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe> */}
            </div>

        </div>

    </section>    
  )
}

export default Guide