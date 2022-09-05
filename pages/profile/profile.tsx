import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserTie, faArrowLeft, faPenToSquare, faGift, faStar, faGear, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Profile = () => {
  return (
    <div className='bg-slate-900 min-h-screen font-body text-white'>
        <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>
                <Link href='../home'>
                <FontAwesomeIcon icon={faArrowLeft}/> 
                </Link>
                <h1 className='font-light'>Back</h1> 
                
            </div>
            <div className=' text-white font-thin mr-4 ml-auto text-2xl relative'>
                <Link href='../profile/edit-profile'>
             <button><FontAwesomeIcon icon={faPenToSquare}/></button></Link>  
            </div>
        </div>
        <div className='grid place-items-center'>
            <div className='bg-cyan-400 rounded-full p-6 px-7 ring-2 ring-white'>
              <FontAwesomeIcon icon={faUserTie}/>  
            </div>
            <div className='mt-3 grid place-items-center'>
                <h1>Ishtiaq Ahmed</h1>
                <p>01XX-XXX-XX</p>
            </div>           
        </div>
        <div className='flex justify-center mt-4'>
            <h1>-------------</h1>
        </div>

        <div className='flex justify-center mt-8'>
            <FontAwesomeIcon icon={faGift} className='bg-purple-600 p-4'/>
            <Link href='../../package/bonus'>
            <button className='bg-purple-600 pr-6'>Collect Bonus</button>
            </Link>
        </div>
        <div>
        <div className='bg-slate-700 mx-6 mt-16 rounded-xl'>
                            <div className='flex text-white py-4 ml-4'>
                                    <div className='text-sm'>
                                        <p>Premium package</p>
                                        <p className=' text-slate-300'>30 Days</p>
                                    </div>
                                    <h1 className='font-bold ml-auto mr-12 text-center mt-2 text-xl'>39 BDT</h1>
                            </div>
                        </div>   
        </div>


    <div className='mx-6 my-4'>
        <div className='flex items-center py-8'>
            <div className='flex items-center space-x-3'>  
                <FontAwesomeIcon icon={faStar} className='bg-white text-slate-500 p-2 rounded-xl'/> 
                <h1>FAQ</h1>
            </div>
            <Link href='../faq/faq'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/>
            </Link> 
        </div>       
        <div className='flex items-center'>
            <div className='flex items-center space-x-3'>
                <FontAwesomeIcon icon={faGear} className='bg-white text-slate-500 p-2 rounded-xl'/> 
                <h1>Settings</h1>
            </div>
            <Link href='../faq/settings'>
            <FontAwesomeIcon icon={faAngleRight} className='text-white ml-auto cursor-pointer'/></Link>
        </div>
    </div>    
        <div className='mt-28 pb-6 flex justify-center'>
            <h1>Unsubscribe</h1>
        </div>
    </div>
  )
}

export default Profile
