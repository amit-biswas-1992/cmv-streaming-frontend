import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faCirclePlay, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import ModalSubscribe from '../../../components/ModalSubscribe'
import Link from 'next/link'
import Natok from '../../components/assets/6.png'
import Image from 'next/image'
import ShowMore from '../../../components/showmore'
import { callApiGetWithoutToken } from '../../../services/api.service'
import { IMAGE_BASE_URL } from '../../../utils/constants'


export const getServerSideProps = async (context) => {
   const id = context.params.pageno;
   const data = await callApiGetWithoutToken(`/core/media-content-preview/${id}`);

    
    return {
      props: {
        data,
      },
    };
  };




const Preview = ({data}) => { 
  const myLoader = ({ src, width, quality }) => {
  return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
}

    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)
  return (
    <div className='bg-slate-900 font-body'>    
    
      <div className=''> 
        <div className='grid grid-cols-2 ml-4 pt-2 mb-4 justify-items-stretch'>
            <div className='text-2xl font-thin text-white'>
              <Link href='../home'>
              <a>
               <FontAwesomeIcon icon={faArrowLeft}/>
              </a>
              </Link>
                  
            </div>
            <div className=' text-white font-thin mr-4 ml-auto text-2xl relative'>
                <FontAwesomeIcon icon={faHeart}/>   
            </div>
        </div>
        </div>
    <div className=''>
        <div className='px-20 lg:w-80'>
          <Link href='../content-original/video'><a>
            <Image className='rounded-2xl' loader={myLoader}
                  src={data.cover} width={300} height={350}  alt='' /></a></Link>
          </div>
        
                 
        <div className='grid place-items-center text-white'>
            <h1 className='font-bold mt-1'>{data.title}</h1>
            <p className='mt-2 font-thin'>2021  |  Romance  |  1h 35m</p>
        </div>
        <div className='grid place-items-center mt-4'>
            <div className='text-red-400'>
               <button onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faCirclePlay} className='text-5xl'/></button> 
               <ModalSubscribe onClose={handleOnClose} visible={showModal}/>   
            </div>
            <p className='mt-3 text-white'>Show More</p>
            <div className='text-xl text-white'> 
                  <ShowMore />      
            </div>
        </div>
        <div className='pb-24'>
        </div>
    </div>

    </div>
  )
}

export default Preview