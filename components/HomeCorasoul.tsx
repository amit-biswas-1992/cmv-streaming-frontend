import React from 'react'
import Image from 'next/image'




const myLoader = ({ src, width, quality }) => {
  return `https://cmv.dvcoreapi.com/media/content/${src}?w=${width}&q=${quality || 75}`
}
const HomeCorasoul = ({data}) => {
  return (
    <div className='pt-6'>
        
    <div>
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4 mb-8'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

          
       
<Image className='rounded-sm'loader={myLoader}
                  src={curElem.thumb} width={500} height={250} alt=''/>
                           
              </div>   
    
    ))}

    </div>
    </div>
       
    </div>
  )
}

export default HomeCorasoul