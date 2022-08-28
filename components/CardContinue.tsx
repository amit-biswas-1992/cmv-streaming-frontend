import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'




const CardContinue = (props) => {

 
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

          
          <button>
              <img className='w-30 h-18' src={value.img.src} />
              <div className='w-32 whitespace-nowrap text-white items-center align-middle'>
                <h1 className='text-white'>{value.title}</h1>
              </div>  
          </button>
               
    </div>
    ))}

    </div>
  )
}

export default CardContinue