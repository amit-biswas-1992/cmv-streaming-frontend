import React from 'react'
import LoadAnimation from './LoadAnimation'

const Modal = ({visible, onClose}) => {
   if(!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        
        <div className='bg-white rounded-md'>
            <button className='p-3 ml-60' onClick={onClose}>X</button>
            <LoadAnimation/>
            <div className='text-center'>
            <h1 className='text-2xl'>Processing Payement</h1>
            <p className='mt-2 text-slate-400 pb-4'>Please do not close this page</p>
            </div>
        </div>


    </div>
  )
}

export default Modal