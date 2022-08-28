import React from 'react'
import Image from '../node_modules/next/image'

const CardContinue = (props) => {
  return (
    <div className=''>

    
    <div className='grid grid-cols-3 gap-4'>
    {props.details.map( (value,index)=>(

     <div className='my-3' key={index}>

          
       
        <Image className='' src={value.img.src} alt=''/>
              <div className='whitespace-nowrap text-white items-center align-middle'>
                <h1 className='text-white mt-3'>{value.title}</h1>
                <p className='text-cyan-400'>{value.catagory}</p>
              </div>   
    </div>
    ))}

    </div>
    </div>
  )
}

export default CardContinue