import React from 'react'

import Image from 'next/image'



const CardNewRelease = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4 mb-8'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
       
        <Image className='rounded-xl' src={value.img} alt='' />
              <div className='w-32 whitespace-nowrap text-white items-center align-middle mr-32'>             
              </div>   
    </div>
    ))}

    </div>
  )
}

export default CardNewRelease