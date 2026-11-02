import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'All', label: 'All' },
  { value: 'Asian', label: 'Asian' },
  { value: 'Latino', label: 'Latino' },
  { value: 'Italian', label: 'Italian' },
  { value: 'Southern', label: 'Southern' },
  { value: 'Budget', label: 'Budget' }
]

const Search = () => {
  return (
    <section id="inputs" className="flex flex-center flex-column mb-w-100">

        <div id="search" className="flex flex-between mb-w-100 no-col">
            <svg id='searchSVG' width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-f</title><path d="M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z"/><line x1="338.29" y1="338.29" x2="448" y2="448"/></svg>
            <input type="text" placeholder="Search Recommendations"/>

        </div>

       
            
        <Select id='dropdown' options={options}></Select>
            
        
    </section>
  )
}

export default Search