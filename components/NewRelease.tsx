import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const NewRelease = ({data}) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://cmv.dvcoreapi.com/media/content/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='pt-4'>
        <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
            <h1 className='text-xl font-bold text-white cursor-pointer'>New Release</h1>
            
            <Link href='../demo-view'><button className=' text-white font-thin mr-4'>View all
            </button></Link> 
           
        </div>
        <div>
        <div className='flex space-x-3 overflow-x-auto scrollbar-hide overscroll-x-contain mx-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

            <Link href='../content-original/preview'><a>
            <Image className='rounded-2xl'loader={myLoader}
                  src={curElem.cover} width={300} height={350}  alt=''/></a>
            </Link>
       
                
              <div className='w-32 whitespace-nowrap text-white items-center align-middle'>
                
                <h1 className='text-white mt-2'>{curElem.title}</h1>
              </div>   
    </div>
    ))}

    </div>
    </div>    
    </div>
  )
}

export default NewRelease