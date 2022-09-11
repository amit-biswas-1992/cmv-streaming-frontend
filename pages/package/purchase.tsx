import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faLock, faDownload, faTv} from '@fortawesome/free-solid-svg-icons'
import Modal from '../../components/Modal'
import style from '../../components/package.module.css'
import Link from 'next/link'
import { callApiGetWithoutToken } from "../../services/api.service";

export const getStaticProps = async () => {
      const data = await callApiGetWithoutToken("/package");
    return {
      props: {
        data,
      },
    };
  }; 
const Purchase = ({data}) => {
    const [showModal,setShowModal] = useState(false)
    const handleOnClose =() => setShowModal(false)
    console.log('package data is',data)


  return (
    <div className='bg-slate-900 font-body'>
        <div className='pt-4 text-white'>
            <div className='text-2xl font-thin text-white ml-4'>
                <Link href='../home'>
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
        <div className='flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4'>
    {data.map( (curElem)=>(

     <div className='' key={curElem.id}>

                    <div className='bg-slate-700 mx-4 mt-10 rounded-xl cursor-pointer hover:ring-4'>
                            <div className='flex text-white py-4 ml-4'>
                                    <div className=''>
                                        <p>{curElem.name}</p>
                                        <p className='font-thin text-slate-300'>{curElem.cycle}</p>
                                    </div>
                                    <h1 className='font-bold ml-auto mr-12 text-center mt-2 text-xl'>{curElem.price+' BDT'}</h1>
                            </div>
                        </div>     
       
                
              
    </div>
    ))}

    </div>

        <div className='fixed bottom-16 inset-x-0 z-50 mx-4'>
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

export default Purchase