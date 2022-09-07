import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faShare, faFileSignature, faCircleInfo,faAngleRight, faBell, faToggleOn} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const settings = () => {
  return (
    <div className='font-body'>
        <div className='pt-4 text-white'>
            <div className='text-2xl font-thin text-white ml-4'>
                <Link href='../home'>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>  
            </div>
            <h1 className='text-xl grid place-items-center'>More</h1>
        </div>
        <div className='mx-4 my-4'>
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faShare} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>Share Drama Buzz</h1>
            </div>
            <Link href=''>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>    
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faFileSignature} className=' text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>Terms & Conditions</h1>
            </div>
            <Link href=''>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>    
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faCircleInfo} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>About Drama Buzz</h1>
            </div>
            <Link href=''>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faBell} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>About Drama Buzz</h1>
            </div>
            <Link href=''>
            <FontAwesomeIcon icon={faToggleOn} className='text-white ml-auto cursor-pointer text-lg'/>
            </Link> 
        </div>    
         
        </div>
    </div>
  )
}

export default settings