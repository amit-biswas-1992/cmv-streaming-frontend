import Image from 'next/image'
import Link from 'next/link'
import { IMAGE_BASE_URL } from '../utils/constants'


const MostRecent = ({data}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className='pt-6'>
    <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Most Populer</h1>
        <Link href='../demo-view'><a>
        <button className=' text-white font-thin mr-4'>View all
            </button></a>
            </Link>
    </div>
    <div>
    
    <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map((curElem)=>(
    <div className='w-44 bg-slate-800 text-white rounded-b-2xl rounded-t-2xl whitespace-nowrap' key={curElem.id}>
       <Link href={`/content-original/preview-new/${curElem.id}`}><a>
          
          <Image className='rounded-2xl' loader={myLoader}
                  src={curElem.cover} width={300} height={350}  alt=''/>
            
          </a></Link>
          <div className=''>
            <div className='mr-16 px-2 pb-3 text-sm'>
                <p>{curElem.title}</p>
                <div className='flex space-x-2 items-center'>
                <p>{curElem.duration}</p>
                <p className='text-sm'>•</p>
                <p className='mr-12'>2022</p>
                </div>
                
            </div>
          </div>
    </div>
    ))}
    </div>
        </div>
    
</div>
  )
}

export default MostRecent