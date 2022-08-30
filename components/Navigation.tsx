import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faChartLine,faPhotoFilm, faCoins, faBars} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const Navigation = () => {
  return (
    <div className='fixed bottom-0 inset-x-0 z-50'>

   
    <div className='text-slate-600 bg-slate-800 py-3 grid grid-cols-5 gap-3 place-items-center text-xl'>
              <Link href='Home'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon icon={faHome}/>
                    <p className='text-sm'>Home</p>
                  </button>
                </a>
              </Link>
              <Link href='NewRelease'>
                <a>
                  <button className='hover:text-white'>
                   <FontAwesomeIcon icon={faChartLine}/>
                   <p className='text-sm'>Exclusive</p>
                  </button>               
                </a>
              </Link>
              <Link href='Upcoming'>
                <a>
                  <button className='hover:text-white'>
                  <FontAwesomeIcon icon={faPhotoFilm}/>
                  <p className='text-sm'>Coming Soon</p>
                  </button>    
                </a>
              </Link>
              <Link href='BuyPackage'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon icon={faCoins}/>
                    <p className='text-sm'>Packages</p>
                  </button> 
                </a>
              </Link>
              <Link href='More'>
                <a>
                  <button className='hover:text-white'>
                    <FontAwesomeIcon icon={faBars}/>
                    <p className='text-sm'>More</p>
                  </button>
                
                </a>
              </Link>
    </div>
    </div>
  )
}

export default Navigation