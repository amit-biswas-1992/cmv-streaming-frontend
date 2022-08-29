import React from 'react'
import Image from 'next/image'




const CardContinue = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
       <div className='w-32'>
        <Image className='aspect-square rounded-full ring-2 mt-2' src={value.img} alt='' />
       </div>
        
              <div className='whitespace-nowrap text-white items-center text-center mt-4'>
                <h1 className='text-white'>{value.title}</h1>
                <h1 className='text-cyan-400'>{value.catagory}</h1>
              </div>   
    </div>
    ))}

    </div>
  )
}

export default CardContinue