import React from 'react'
const Card = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer'>
    {props.details.map( (value,index)=>(
    <div className='w-15' key={index}>
          <div>
            <img className='rounded-t-2xl' src={value.img.src} />
          </div>
          <div className='bg-slate-800 pr-6 px-2 pl-2 pb-9 pt-3 text-white rounded-b-2xl whitespace-nowrap'>
            <p>{value.title}</p>
            <div className='flex space-x-2 items-center justify-center'>
            <p>{value.time}</p>
            <p className='text-2xl'>•</p>
            <p>{value.catagory}</p>
            </div>
          </div>
    </div>
    ))}
    </div>
  )
}

export default Card