import Image from 'next/image';
import Link from "next/link";
import { IMAGE_BASE_URL } from '../utils/constants';


const Teaser = ({data}) => {
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }
  return (
    <div className="pt-6">
      <div className="flex justify-between items-center ml-4 whitespace-nowrap mt-4">
        <Link href="teaser">
          <h1 className="text-xl font-bold text-white cursor-pointer">
            Teaser
          </h1>
        </Link>
        <Link href='../demo-view'><a>
        <button>
          <p className=" text-white font-thin mr-4">View all</p>
        </button></a>
        </Link>
      </div>
      <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>
       <Link href={`/content-original/preview-new/${curElem.id}`}>   
       <div className='w-32 py-2'>
        <Image className='aspect-square rounded-full ring-2 mt-2 py-2' loader={myLoader}
                  src={curElem.cover} width={350} height={350}  alt=''/> 
       </div>
       </Link>
        
              <div className='whitespace-nowrap text-white items-center text-center'>
                <h1 className='text-white'>{curElem.title}</h1>
                <h1 className='text-cyan-400'>{'catagory'}</h1>
              </div>   
    </div>
    ))}

    </div>
    </div>
  );
};

export default Teaser;
