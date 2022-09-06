import React from 'react'

import Link from 'next/link'
import Image from 'next/image'





function Explore({data}) {
  console.log('explore card',data)


  const myLoader = ({ src, width, quality }) => {
    return `https://cmv.dvcoreapi.com/media/category/${src}?w=${width}&q=${quality || 75}`
  }

  
  return (
    <div className=''>
        <div className='flex justify-between items-center ml-4 whitespace-nowrap'>
            <h1 className='text-xl font-bold text-white cursor-pointer'>Explore Catagory</h1>
            <Link href='../content/view-all'>
            <button>
            <p className=' text-white font-thin mr-4'>View all</p>
            </button>
            </Link>
        </div>
      
        <div>
        <div className='flex space-x-4 text-left overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

          
              <div className=''>
                <Link href='../content/preview'>
               <Image className='rounded-sm'loader={myLoader}
                  src={curElem.cover_photo} width={200} height={80} alt=''/>
               </Link> 
              </div>           
    </div>
    ))}

    </div>
  </div>

</div>
   
  )
}

export default Explore