import React from 'react'
import Card2 from './Card2'
import CardData from './CardData'

const TrendingNow = () => {
  
  return (
    <div className='pt-3'>
    <div className='grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4 mb-4'>
        <h1 className='text-xl font-bold text-white'>Trending Now</h1>
        <p className=' text-white font-thin ml-auto mr-8'>View all</p>
    </div>
    <div>
     <Card2 details={CardData}/> 
    </div>
</div>
  )
}

export default TrendingNow