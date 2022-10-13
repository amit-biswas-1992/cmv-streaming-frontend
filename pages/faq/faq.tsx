import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import MuiAccrodion from '../../components/MuiAccrodion'


const FAQ = () => {
  return (
    <div className='bg-slate-900 min-h-screen font-body text-white'>
      <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
        <div className='text-xl text-white flex space-x-3 items-center cursor-pointer'>
          <Link href='../profile/profile'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

          <h1 className='font-light'>FAQ</h1>
        </div>
      </div>
      <div className='mt-4'>
        <MuiAccrodion />
      </div>
      <div className=''>
      </div>
    </div>
  )
}

export default FAQ