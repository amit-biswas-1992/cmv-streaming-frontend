import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import ViewAll from '../components/view-all-comp'

const Search = () => {
  return (
    <div className='bg-slate-900 font-body'>
        
        <div className='mx-4 pt-4'>
        <Link href='../home'>
              <a>
               <FontAwesomeIcon className='text-2xl font-thin text-white mb-4'icon={faArrowLeft}/>
               </a>
              </Link>
            <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
             <FontAwesomeIcon className='text-slate-500 text-2xl'icon={faSearch}/>
            </span>
            <input className="placeholder:text-slate-500 block bg-slate-700 w-full rounded-full py-4 pl-5 pr-3 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1 text-lg" placeholder="Search" type="text" name="search"/>
            </label>
        </div>
        <div className=''>
            <ViewAll />
        </div>
       
        
        
         
         
    </div>
  )
}

export default Search