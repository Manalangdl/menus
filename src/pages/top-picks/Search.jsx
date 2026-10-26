import React from 'react'

const Search = () => {
  return (
    <section id="inputs" class="flex flex-center flex-column mb-w-100">

        <div id="search" class="flex flex-between mb-w-100 no-col">
            <svg id='searchSVG' width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-f</title><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"/><line x1="338.29" y1="338.29" x2="448" y2="448"/></svg>
            <input type="text" placeholder="Search Recommendations"/>

        </div>

        <div id="dropdown" class="flex flex-column mb-w-100">
            <div class="flex flex-between browse no-col mb-w-100"
                    // onclick="document.getElementById('menu').classList.toggle('hidden')"
            >
                <p id="menuText">Browse By Category</p>

                <p>V</p>
            </div>
            

            <div id="menu" class="flex flex-column astart hidden">
                <div>All</div>
                <div>Asian</div>
                <div>Latino</div>
                <div>Italian</div>
                <div>Southern</div>
                <div>Budget</div>
            </div>
        </div>
    </section>
  )
}

export default Search