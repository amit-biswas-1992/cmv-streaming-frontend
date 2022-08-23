import React from 'react'
import ViewCard from '../components/ViewCard'
import CardData from '../components/CardData'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const ViewAll = () => {
  return (
    <div className='bg-slate-900 font-body'>
         <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>  
                <FontAwesomeIcon icon={faArrowLeft}/>
                <h1 className='font-light'>Romance</h1> 
             </div>           
         </div>
        <div className='mx-4'>
            <ViewCard details={CardData} />
        </div>
</div>
  )
}

export default ViewAll