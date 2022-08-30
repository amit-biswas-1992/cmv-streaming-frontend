import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faCirclePlay, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import ModalSubscribe from '../components/ModalSubscribe'
import Link from 'next/link'
import Natok from '../components/assets/6.png'
import Image from 'next/image'







const MoviePreview = () => {
    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)
  return (
    <div className='bg-slate-900 font-body'>    
    
      <div className=''> 
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-2xl font-thin text-white'>
              <Link href='Home'>
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
        <div className='px-8'>
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
            <div className='text-xl text-white mt-2'>
                <FontAwesomeIcon icon={faAngleUp}/>   
            </div>
        </div>
        <div className='text-white mx-4'>
            <p className='font-thin'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            <h1 className='font-bold text-xl my-4'>Cast</h1>
            <p>Tasnuva Tisha, Syed Zaman Shaon, Nayan Babu, Kajal Suborno</p>
            <h1 className='font-bold text-xl my-4'>Script Director</h1>
            <p>Biddut Roy, Animesh Iche</p>
        </div>
        <div className=''>
          
        </div>

    </div>
  )
}

export default MoviePreview