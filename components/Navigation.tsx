import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine,faPhotoFilm, faCoins, faBars} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='fixed bottom-0 inset-x-0 z-50 font-body'>

   
    <div className='text-slate-600 bg-slate-800 py-2 grid grid-cols-5 gap-3 place-items-center text-xl mt-5'>
              <Link href='home'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon className='text-sm' icon={faHome}/>
                    <p className='text-sm'>Home</p>
                  </button>
                </a>
              </Link>
              <Link href='newRelease'>
                <a>
                  <button className='hover:text-white'>
                   <FontAwesomeIcon className='text-sm' icon={faChartLine}/>
                   <p className='text-sm'>Exclusive</p>
                  </button>               
                </a>
              </Link>
              <Link href='upcoming'>
                <a>
                  <button className='hover:text-white'>
                  <FontAwesomeIcon className='text-sm' icon={faPhotoFilm}/>
                  <p className='text-sm'>Coming</p>
                  </button>    
                </a>
              </Link>
              <Link href='buyPackage'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon className='text-sm' icon={faCoins}/>
                    <p className='text-sm'>Packages</p>
                  </button> 
                </a>
              </Link>
              <Link href='more'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon className='text-sm' icon={faBars}/>
                    <p className='text-sm'>More</p>
                  </button>
                
                </a>
              </Link>
    </div>
    </div>
  )
}

export default Navigation