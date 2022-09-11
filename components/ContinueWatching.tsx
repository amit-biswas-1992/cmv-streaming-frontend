import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ContinueWatching = ({data}) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://cmv.dvcoreapi.com/media/content/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Continue Watching</h1>
        <Link href='../demo-view'><a>
        <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button></a></Link>
    </div>
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem}>

          
        
          <Link href='../content-original/preview'><a>
           
            <Image className=''loader={myLoader}
                  src={curElem.cover} width={280} height={450}  alt=''/>
        
          
                  </a></Link> 
              <div className='w-32 whitespace-nowrap text-white items-center align-middle'>
                <h1 className='text-white'>{curElem.title}</h1>
              </div>  
        
               
    </div>
    ))}

    </div>
</div>
  )
}

export default ContinueWatching