import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
const CatagoryCard = (props) => {
  return (
    <div className=''>
    {props.details.map( (value,index)=>(
    <div className='' key={index}>
         

        <div className='pt-4 px-2'>
            <div className='grid grid-cols-3 gap-3 place-items-stretch items-center mx-3'>
            <div className='w-full'> 
              <Image className='' src={value.img} alt='' />
            </div>

            <div className='text-lg'>
                    <h1 className='font-bold whitespace-nowrap'>{value.title}</h1>
                    <p className='font-thin'>{value.year} | {value.time}</p>
                    <p className='font-thin text-cyan-400'>{value.catagory}</p>
            </div>

            <div className='text-3xl ml-auto'>
                <FontAwesomeIcon icon={faCirclePlay}/> 
            </div>  
            </div>
        </div> 

    </div>
    ))}
    </div>
  )
}

export default CatagoryCard