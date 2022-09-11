import React from 'react'
import Image from 'next/image'
import { IMAGE_BASE_URL } from '../utils/constants'




const myLoader = ({ src, width, quality }) => {
  return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
}
const HomeCorasoul = ({data}) => {
  return (
    <div className=''>  
    <div>
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4 mb-8'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

          
       
           <Image className='rounded-sm'loader={myLoader}
                  src={curElem.thumb} width={'700'} height={'450'} alt=''/>
                  <p className='mr-40'></p>
                           
              </div>   
    
    ))}

    </div>
    </div>
       
    </div>
  )
}

export default HomeCorasoul