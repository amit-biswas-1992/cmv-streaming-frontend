import React from 'react'
import Image from 'next/image'
import Link from 'next/link'




const CardContinue = (props) => {
  return (
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {props.details.map( (value,index)=>(

     <div className='' key={index}>
       <Link href='../content-original/preview'>   
       <div className='w-32 py-2'>
        <Image className='aspect-square rounded-full ring-2 mt-2 py-2' src={value.img} alt='' />
       </div>
       </Link>
        
              <div className='whitespace-nowrap text-white items-center text-center'>
                <h1 className='text-white'>{value.title}</h1>
                <h1 className='text-cyan-400'>{value.catagory}</h1>
              </div>   
    </div>
    ))}

    </div>
  )
}

export default CardContinue