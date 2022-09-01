import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faLock, faDownload, faTv} from '@fortawesome/free-solid-svg-icons'
import Modal from '../components/Modal'
import style from '../components/package.module.css'
import Link from 'next/link'

const BuyPackage = () => {
    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)


  return (
    <div className='bg-slate-900 font-body h-screen'>
        <div className='pt-4 text-white'>
            <div className='text-2xl font-thin text-white ml-4'>
                <Link href='home_page'>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>  
            </div>
            <h1 className='text-xl grid place-items-center'>Premium</h1>
        </div>
        <div className='text-white mx-4 font-semibold text-2xl mt-6'>
            <h1>Unlimited data only at CMV entertainment</h1>
        </div>
        <div className='text-white mx-4 mt-6 '>
            <div className='flex space-x-3 my-2'>
            <FontAwesomeIcon className='text-orange-400' icon={faLock} /><p>Unlock premium natok and dramas</p>
            </div>
            <div className='flex space-x-3'>
            <FontAwesomeIcon className='text-cyan-400' icon={faDownload} /><p>Unlimited download</p>
            </div>
            <div className='flex space-x-3 my-2'>
            <FontAwesomeIcon className='text-purple-400' icon={faTv}/><p>Watch in HD up to 4K resolution</p>
            </div>
        </div>


        <div className={style.container}>


        <input type='radio' name='size' id='small' className={style.input}/>      
            <label className=''> 
            <div className='bg-slate-700 mx-4 mt-16 rounded-xl cursor-pointer hover:ring-4'>
                            <div className='flex text-white py-4 ml-4'>
                                    <div className=''>
                                        <p>Monthly</p>
                                        <p className='font-thin text-slate-300'>30 Days</p>
                                    </div>
                                    <h1 className='font-bold ml-auto mr-12 text-center mt-2 text-xl'>39 BDT</h1>
                            </div>
                        </div>   
            </label><br/>

        <input type='radio' name='size' id='large' className={style.input}/>
            <label>
            <div className='bg-slate-700 mx-4 mt-2 rounded-xl cursor-pointer hover:ring-4'>
                <div className='flex text-white py-4 ml-4'>
                        <div className=''>
                            <p>15 Days Package</p>
                            <p className='font-thin text-slate-300'>15 Days</p>
                        </div>
                        <h1 className='font-bold ml-auto mr-12 text-center mt-2 text-xl'>29 BDT</h1>
                </div>
            </div>
            </label>


        </div>

        <div className='fixed bottom-20 inset-x-0 z-50 mx-4'>
                        <button onClick={() => setShowModal(true)}className="rounded-2xl w-full py-4 my-4 mt-8 bg-sky-600 hover:bg-sky-700 text-white text-center">
                        Register
                        </button>
                        
        </div>
        <div>
            <Modal onClose={handleOnClose}visible={showModal}/>
        </div>
    </div>
  )
}

export default BuyPackage