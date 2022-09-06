import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'


const Exclusive = ({data}) => {
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Exclusive</h1>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
    </div>
   
    <div className='Card-Exclusive'>
    <div className='flex space-x-4 text-left overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

              <div className='relative'><Link href='../content/preview'>
               <Image className='rounded-xl' src={curElem.img} alt=''/></Link> 
              <div className='flex w-32 mt-2 whitespace-nowrap text-white items-center space-x-2'>
                <FontAwesomeIcon className='text-cyan-400'icon={faCirclePlay}/>
                <h1 className='text-white'>{curElem.title}</h1>
                <h1 className='text-white'>{curElem.release_date}</h1>
              </div>  
              </div>
          
               
    </div>
    ))}

    </div>
    </div>
        
    </div>

  )
}

export default Exclusive