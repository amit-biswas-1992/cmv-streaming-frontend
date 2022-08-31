import React from 'react'
import LoadAnimation from './LoadAnimation'

const Modal = ({visible, onClose}) => {
   if(!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        
        <div className='bg-slate-800 rounded-md'>
            <button className='p-3 ml-60 text-red-600' onClick={onClose}>X</button>
            <LoadAnimation/>
            <div className='text-center p-4'>
            <h1 className='text-xl text-cyan-400'>Processing Payement</h1>
            <p className='mt-2 text-white pb-4'>Please do not close this page</p>
            </div>
        </div>


    </div>
  )
}

export default Modal