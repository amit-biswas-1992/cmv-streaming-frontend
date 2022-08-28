import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'




const CardContinue = (props) => {

 
  return (
    <div className='flex space-x-8 text-left overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
              <div className='relative'>
               <img className='rounded-xl' src={value.img.src} />   
              <div className='flex w-32 mt-3 whitespace-nowrap text-white items-center space-x-2'>
                <FontAwesomeIcon className='text-cyan-400'icon={faCirclePlay}/>
                <h1 className='text-white'>{value.title}</h1>
              </div>  
              </div>
          
               
    </div>
    ))}

    </div>
  )
}

export default CardContinue