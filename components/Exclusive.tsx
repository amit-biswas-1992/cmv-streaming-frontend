import React from 'react'
import CardExclusive from './CardExclusive'
import CardData from './CardData'


const Exclusive = () => {
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Exclusive</h1>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
    </div>
   
    <div>
      <CardExclusive details={CardData} />
    </div>
        
    </div>

  )
}

export default Exclusive