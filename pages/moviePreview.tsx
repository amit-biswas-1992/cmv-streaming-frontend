import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faCirclePlay, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import ModalSubscribe from '../components/ModalSubscribe'
import Link from 'next/link'
import Natok from '../components/assets/6.png'
import Image from 'next/image'
import ShowMore from '../components/showmore'







const MoviePreview = () => {
    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)
  return (
    <div className='bg-slate-900 font-body'>    
    
      <div className=''> 
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-2xl font-thin text-white'>
              <Link href='home'>
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
        <div className='px-8 lg:w-80 '>
            <Image className='rounded-2xl items-center' src={Natok} alt='' />
          </div>
        
                 
        <div className='grid place-items-center text-white mt-2'>
            <h1 className='font-bold mt-2'>Megher Bari Jabo</h1>
            <p className='mt-2 font-thin'>2021  |  Romance  |  1h 35m</p>
        </div>
        <div className='grid place-items-center mt-4'>
            <div className='text-slate-200'>
               <button onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faCirclePlay} className='text-6xl'/></button> 
               <ModalSubscribe onClose={handleOnClose} visible={showModal}/>   
            </div>
            <p className='mt-3 text-white'>Show More</p>
            <div className='text-xl text-white'> 
                  <ShowMore />      
            </div>
        </div>
        <div className='pb-20'>
        </div>

    </div>
  )
}

export default MoviePreview