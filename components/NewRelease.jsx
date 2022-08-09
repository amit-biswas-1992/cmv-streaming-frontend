import React from 'react'
import Card from './Card'
import CardData from './CardData'




const NewRelease = () => {
  return (
    <div>
        <div className='grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4'>
            <h1 className='text-xl font-bold text-white'>New Release</h1>
            <p className=' text-white font-thin ml-auto mr-8'>View all</p>
        </div>
        <div className='my-4'>
          <Card details={CardData} />
        </div>
    </div>
  )
}

export default NewRelease