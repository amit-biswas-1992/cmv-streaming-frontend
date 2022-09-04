import React from 'react'
import Card from './Card'
import CardData from './CardData'
import Link from 'next/link'


const MostRecent = () => {
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Most Populer</h1>
        <Link href='viewAll'>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
            </Link>
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