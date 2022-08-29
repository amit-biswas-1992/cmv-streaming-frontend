import React from 'react'

import Image from 'next/image'



const CardNewRelease = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain mx-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
       
        <Image className='' src={value.img} alt='' />
              <div className='w-32 whitespace-nowrap text-white items-center align-middle mr-32'>
                <h1 className='text-slate-900'>!!!!!!!!!!!!!!</h1>
              </div>   
    </div>
    ))}

    </div>
  )
}

export default CardNewRelease