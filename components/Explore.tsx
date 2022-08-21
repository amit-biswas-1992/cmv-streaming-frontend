import React from 'react'
import CardExplore from './CardExplore'




function Explore() {
  return (
    <div className=''>
        <div className='grid grid-cols-2 justify-around items-center ml-4 whitespace-nowrap'>
            <h1 className='text-xl font-bold text-white'>Explore Catagory</h1>
            <p className=' text-white font-thin ml-auto mr-8'>View all</p>
        </div>
        <div className=''>
          <CardExplore />
        </div>


       
      </div>
   
  )
}

export default Explore