import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft,faStar, faTv, faBahai} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Modal2 from '../components/Modal2'


const Bonus = () => {
    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)
  return (
    <div className='bg-slate-900 font-body text-white pb-3'>
        
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>
                <Link href='more'>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
                <h1 className='font-light'>Bonus</h1> 
             </div>           
         </div>
                <div className='bg-slate-700 mx-4 mt-6 rounded-lg'>
                    <div className='flex items-center p-6'>
                        <h1>Istiaq Ahmed</h1>
                        <div className='flex ml-auto space-x-2 items-center'>
                            <FontAwesomeIcon icon={faStar}/>
                            <p>500 hour</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Box width={300}>      
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" className='text-cyan-500' />
                        </Box>  
                    </div>
                    <div className='flex p-6'> 
                    <h1 className='ml-auto'>1000 h</h1>
                    </div>                   
                </div>

                <div className='bg-slate-700 mx-4 mt-6 rounded-lg'>
                    <div className='flex items-center p-6'>
                        <h1 className='text-xl'>Collect Bonus</h1>       
                        <button onClick={() => setShowModal(true)} className='ml-auto bg-cyan-500 p-2 px-6 rounded-full'>Collect</button>
                        <div>
            <Modal2 onClose={handleOnClose}visible={showModal}/>
        </div>                       
                    </div>                   
                </div>
            <div className='mb-20'>
                <div className='bg-slate-700 mx-4 mt-6 rounded-lg pb-8'>
                    <div className='flex items-center p-6'>
                        <h1 className='text-xl'>How to works</h1>
                        <div className='flex ml-auto space-x-2 items-center text-sm'>
                            <FontAwesomeIcon icon={faTv}/>
                            <p>Watch later</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div>
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div> 
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div> 
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div> 
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div>               
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div> 
                    <div className='flex items-center justify-center space-x-2 whitespace-nowrap text-sm mb-3'>
                        <FontAwesomeIcon icon={faBahai}/>
                        <p>Lorem ipsum dolor sit amet consectetur.</p> 
                    </div> 
                </div>
                
            </div>  
    </div>
  )
}

export default Bonus