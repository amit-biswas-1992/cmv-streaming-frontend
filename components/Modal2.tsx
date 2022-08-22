import React from 'react'
import RewardAnimation from './RewardAnimation'

const Modal2 = ({visible, onClose}) => {
   if(!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        
        <div className='bg-white rounded-md'>
            <RewardAnimation/>
            <div className='text-center p-6'>
            <h1 className='text-2xl text-black'>Congratulations</h1>
            <p className='mt-2 text-slate-400 pb-4 text-sm'>You Get Free 15 Days package</p>
            <div className='bg-purple-600 rounded-lg p-3'>
              <button  onClick={onClose}>Continue</button>
            </div>
            
            </div>
           
        </div>


    </div>
  )
}

export default Modal2