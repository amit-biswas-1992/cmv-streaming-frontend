import React,{useState}  from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft,faBell,faShareNodes} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Image from 'next/image'
import { callApiGetWithoutToken } from "../../services/api.service";
import { IMAGE_BASE_URL } from '../../utils/constants'



export const getStaticProps = async () => {
     const data = await callApiGetWithoutToken("/core/upcoming-content");
     console.log('image',data)
  return {
    props: {
      data,
    },
  };
}; 

const upcoming = ({data}) => {
    const myLoader = ({ src, width, quality }) => {
      return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
    }
    console.log('upcoming er data is',data)
  return (
    <div className='bg-slate-900 font-body text-white'>
        <div className='text-2xl font-thin text-white ml-4 pt-4'>
        <Link href='../home' >
                   <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
        </div>
        <div className='flex justify-center space-x-2 pb-8'>
            <button className='bg-cyan-400 hover:text-white py-2 px-4 rounded-2xl'>Coming Soon</button>
        </div>
        <div className='text-white'>
    {data.map( (curElem)=>(
    <div className='' key={curElem.id}>
        <div>
            <h1 className='text-2xl font-bold mx-4 mb-2'>{curElem.release_date}</h1>   
        </div> 
        <div className='px-4 place-items-center lg:max-h-fit'>
        <Image className='rounded-2xl' loader={myLoader}
                  src={curElem.thumb} width={350} height={200}  alt=''/> 
        </div>

        <div className='flex mt-4 mx-4'>
            <div className=''>
                <p className='mb-1'>Coming in December 2022</p>
                <p className='text-2xl font-bold'>{curElem.title}</p>
            </div>
            <div className='flex space-x-4 ml-auto'>
                <div className='grid place-items-center whitespace-nowrap font-light'>
                         <button className='hover:text-cyan-400 text-white'> <FontAwesomeIcon icon={faBell} className='text-2xl'/> </button>   
                            <h1 className='text-sm'>Remind me</h1>  
                </div>
                <div className='grid place-items-center whitespace-nowrap font-light'>
                            <FontAwesomeIcon icon={faShareNodes} className='text-2xl'/> 
                            <h1 className='text-sm'>Share</h1>  
                </div>   
            </div>
        </div>

        <div className='mx-4 mt-3 pb-10'>
            <p className='font-thin text-sm'>{'value.details'}</p>
        </div>

        

    </div>
    ))}
    </div>
        <div className='pb-12'>

        </div>
        
    </div>
  )
}

export default upcoming