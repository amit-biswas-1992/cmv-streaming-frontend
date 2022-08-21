import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'


const FAQ = () => {
  return (
    <div className='bg-slate-900 min-h-screen font-body text-white'>
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>
                <FontAwesomeIcon icon={faArrowLeft}/> 
                <h1 className='font-light'>FAQ</h1> 
            </div>           
        </div>
<div className='mt-8 mb-4'>
        <div className='flex items-center bg-slate-700 p-6 mx-4 rounded-lg'>
            <h1>What is CMV?</h1>
            <FontAwesomeIcon icon={faAngleRight} className='ml-auto'/> 
        </div>
</div>

<div className='mb-4'>
        <div className='flex items-center bg-slate-700 p-6 mx-4 rounded-lg'>
            <h1>How to subscribe?</h1>
            <FontAwesomeIcon icon={faAngleRight} className='ml-auto'/> 
        </div>
</div>
<div className='mb-4'>
        <div className='flex items-center bg-slate-700 p-6 mx-4 rounded-lg'>
            <h1>Question Here</h1>
            <FontAwesomeIcon icon={faAngleRight} className='ml-auto'/> 
        </div>
</div>
        
       
<div className='mb-4'>
        <div className='flex items-center bg-slate-700 p-6 mx-4 rounded-lg'>
            <h1>Question Here</h1>
            <FontAwesomeIcon icon={faAngleRight} className='ml-auto'/> 
        </div>
</div>        
       

    </div>
  )
}

export default FAQ