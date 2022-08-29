import React from 'react'
import Image from 'next/image'
const Card = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer'>
    {props.details.map( (value,index)=>(
    <div className='w-60 bg-slate-800 text-white rounded-b-2xl rounded-t-2xl whitespace-nowrap' key={index}>
          <div>
            <Image className='rounded-t-2xl' src={value.img} alt=''/>
          </div>
          <div className=''>
            <div className='mr-16 px-6 py-3'>
                <p>{value.title}</p>
                <div className='flex space-x-2 items-center'>
                <p>{value.time}</p>
                <p className='text-2xl'>•</p>
                <p>{value.catagory}</p>
                </div>
                
            </div>
          </div>
    </div>
    ))}
    </div>
  )
}

export default Card