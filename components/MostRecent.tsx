import React from 'react'
import Card from './Card'
import CardData from './CardData'


const MostRecent = () => {
  return (
    <div className='pt-6'>
    <div className='grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4 mb-4'>
        <h1 className='text-xl font-bold text-white'>Most Recent</h1>
        <p className=' text-white font-thin ml-auto mr-8'>View all</p>
    </div>
    <div>
    <div className='my-4'>
          <Card details={CardData} />
        </div>
    </div>
</div>
  )
}

export default MostRecent