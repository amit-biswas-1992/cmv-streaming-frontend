import UpcomingCard from '../components/UpcomingCard'
import CardData2 from '../components/CardData2' 
import React,{useState}  from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const exclusive = () => {
  return (
    <div className='bg-slate-900 font-body text-white'>
        <div className='text-xl text-white ml-4 pt-8'>
        <Link href='home_page' >
                   <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
        </div>
        <div className='flex justify-center space-x-2 pb-8'>
          <Link href='upcoming_page'>
            <button className='hover:bg-cyan-400 text-white py-2 px-4 rounded-2xl'>Coming Soon</button>
            </Link>
            
            <button className='bg-cyan-400 py-2 px-7 rounded-2xl'>Exclusive</button>
          

        </div>
        <div>
           <UpcomingCard details={CardData2}/>
        </div>
        <div className='pb-12'>

        </div>
        
    </div>
  )
}

export default exclusive