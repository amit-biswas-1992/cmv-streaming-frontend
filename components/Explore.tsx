import React from 'react'
import CardExplore from './CardExplore'
import Link from 'next/Link'




function Explore() {
  return (
    <div className=''>
        <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
            <h1 className='text-xl font-bold text-white cursor-pointer'>Explore Catagory</h1>
            <Link href='/CatagoryTile'>
            <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
            </Link>
        </div>
        <div>
          <CardExplore />
        </div>


       
      </div>
   
  )
}

export default Explore