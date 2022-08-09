import React from 'react'
import Corasoul from '../components/Explore Corasoul/Corasoul'



function Explore() {
  return (
    <div>
        <div className='grid grid-cols-2 justify-around items-center ml-4 whitespace-nowrap'>
            <h1 className='text-xl font-bold text-white'>Explore Catagory</h1>
            <p className=' text-white font-thin ml-auto mr-8'>View all</p>
        </div>
        <div>
           <Corasoul />   
        </div>
    </div>
  )
}

export default Explore