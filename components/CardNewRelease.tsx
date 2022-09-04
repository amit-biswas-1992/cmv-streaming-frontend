import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const CardNewRelease = (props) => {
  return (
   
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain mx-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>

<Link href='moviePreview'> 
       <div>
       <Image className='' src={value.img} alt='' />
       </div> </Link>
        
        
              <div className='w-32 whitespace-nowrap text-white items-center align-middle'>
                <h1 className='text-white mt-2'>{value.title}</h1>
              </div>   
    </div>
    ))}

    </div>
   
  )
}

export default CardNewRelease