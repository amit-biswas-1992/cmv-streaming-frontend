import React from 'react'
import Image from '../node_modules/next/image'
const CardContinue = (props) => {

 
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
          <button>
              <Image className='w-30 h-18 rounded-lg' src={value.img.src} alt=''/>
              <div className='w-32 whitespace-nowrap text-white items-center text-left mt-2'>
                <h1 className='text-white'>{value.title}</h1>
                <h1 className='text-cyan-400'>{value.catagory}</h1>
                
              </div>  
          </button>
               
    </div>
    ))}

    </div>
  )
}

export default CardContinue