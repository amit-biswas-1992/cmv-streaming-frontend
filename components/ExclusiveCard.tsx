import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell,faShareNodes} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
const UpcomingCard = (props) => {
  return (
    <div className='text-white'>
    {props.details.map( (value,index)=>(
    <div className='' key={index}>
        <div>
            <h1 className='text-2xl font-bold mx-4 mb-2'></h1>   
        </div> 
        <div className='px-4 place-items-center lg:max-h-fit'>
          <Image className='rounded-lg' src={value.img} alt='' />  
        </div>

        <div className='flex mt-4 mx-4'>
            <div className=''>
                <p className='mb-1'></p>
                <p className='text-2xl font-bold'>{value.title}</p>
            </div>
            <div className='flex space-x-4 ml-auto'>
                <div className='grid place-items-center whitespace-nowrap font-light'>
                         <button className='hover:text-cyan-400 text-white'> <FontAwesomeIcon icon={faBell} className='text-2xl'/> </button>   
                            <h1 className='text-sm'>Remind me</h1>  
                </div>
                <div className='grid place-items-center whitespace-nowrap font-light'>
                            <FontAwesomeIcon icon={faShareNodes} className='text-2xl'/> 
                            <h1 className='text-sm'>Share</h1>  
                </div>   
            </div>
        </div>

        <div className='mx-4 mt-3 pb-10'>
            <p className='font-thin text-sm'>{value.details}</p>
        </div>

        

    </div>
    ))}
    </div>
  )
}

export default UpcomingCard