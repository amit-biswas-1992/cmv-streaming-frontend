import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link';
import { IMAGE_BASE_URL } from '../utils/constants';

const TrendingNow = ({ data }) => {
  // console.log(data, "trending");

  const tag = 'Trending'
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }

  return (

    <div className='pt-3'>
      <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
        <h1 className='text-xl font-bold text-white cursor-pointer'>Trending Now</h1>
        <Link href={`../tag-wise-media/${tag}`}><a>
          <button>
            <p className=' text-white font-thin mr-4'>View all</p>
          </button></a>
        </Link>
      </div>
      <div className="flex space-x-3 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4">
        {data.map((curElem) => (

          <div className='bg-slate-800 rounded-lg p-2 flex text-justify min-w-[300px]' key={curElem.id}>
            <Image className='rounded-xl' loader={myLoader}
              src={curElem.cover} width={100} height={100} alt='' />

            <div className="whitespace-nowrap p-6 break-words ml-1 text-white items-center align-middle py-10">

              <h1>{curElem.title}</h1>
              <p>
                {curElem.duration}
              </p>
              <h1 className="text-lg text-cyan-400">{curElem.category_name}</h1>
            </div>
            <div className="text-cyan-400 py-14 pr-2 pl-auto text-4xl hover:text-white">
              <Link href={`/content-original/preview-new/${curElem.id}`} >
                <button>
                  <FontAwesomeIcon icon={faCirclePlay} />
                </button>
              </Link>
            </div>

          </div>
        ))}

      </div>

    </div >
  )
}

export default TrendingNow