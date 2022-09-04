import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faShare, faFileSignature, faCircleInfo,faAngleRight, faBell, faToggleOn} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
const settings = () => {
  return (
    <div className='font-body'>
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>
                <Link href='../profile/profile'>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
                <h1 className='font-light'>Settings</h1> 
            </div>           
        </div>
        <div className='mx-8 my-4'>
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faShare} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>Share Drama Buzz</h1>
            </div>
            <Link href='../faq/faq'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>    
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faFileSignature} className=' text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>Terms & Conditions</h1>
            </div>
            <Link href='../faq/faq'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>    
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faCircleInfo} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>About Drama Buzz</h1>
            </div>
            <Link href='../faq/faq'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>
        <div className='flex items-center pt-2'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faBell} className='text-slate-600 p-2 rounded-xl'/> 
                <h1 className='text-white'>About Drama Buzz</h1>
            </div>
            <Link href='../faq/faq'>
            <FontAwesomeIcon icon={faToggleOn} className='text-white ml-auto cursor-pointer text-lg'/>
            </Link> 
        </div>    
         
        </div>
    </div>
  )
}

export default settings