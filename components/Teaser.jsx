import React from 'react'
import CardTeaser from './CardTeaser'
import CardData from './CardData'

const Teaser = () => {
  return (
    <div>
    <div className='grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white'>Teaser</h1>
        <p className=' text-white font-thin ml-auto mr-8'>View all</p>
    </div>
    <div>
    <CardTeaser details={CardData} />
    </div>
</div>
  )
}

export default Teaser