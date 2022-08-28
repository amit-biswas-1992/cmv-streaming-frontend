import React from 'react'
import Card from './Card'
import CardData from './CardData'


const MostRecent = () => {
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Most Recent</h1>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
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