import React from 'react'
import CardContinue from './CardContinue'
import CardData from './CardData'
import Link from 'next/link'
const NewRelease = () => {
  return (
    <div className='pt-6'>
        <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
            <h1 className='text-xl font-bold text-white cursor-pointer'>New Release</h1>
            <Link href='../content'>
            <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
            </Link> 
        </div>
        <div>
      <CardContinue details={CardData} />
    </div>    
    </div>
  )
}

export default NewRelease