import React from 'react'
import CardOnly from './CardOnly'
import CardData from './CardData'
import Link from 'next/link'

const OnlyMade = () => {
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4 mb-7'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Only For You</h1>
        <button>
        <Link href='../demo-view'><a><p className=' text-white font-thin mr-4'>View all</p></a></Link>
            </button>
    </div>
    <div className='pb-24'>
    <div className='bg-slate-700 p-3 ml-6 rounded-l-lg'>
      <CardOnly details={CardData} />
    </div>
    </div>
    
    
</div>
  )
}

export default OnlyMade