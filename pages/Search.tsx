import React from 'react'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import CardData from '../components/CardData'
import TopGeners from '../components/TopGeners'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Search = () => {
  return (
    <div className='bg-slate-900 font-body'>
        <div className='mx-4 py-4'>
            <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-6">
             <FontAwesomeIcon className='text-slate-500 text-2xl'icon={faSearch}/>
            </span>
            <input className="placeholder:text-slate-500 block bg-slate-700 w-full rounded-full py-4 pl-5 pr-3 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1 text-lg" placeholder="Search" type="text" name="search"/>
            </label>
        </div>
        <div className='top geners'>
        <div className='flex justify-between items-center ml-4 whitespace-nowrap mb-4'>
                <h1 className='text-xl font-bold text-white cursor-pointer'>Top Geners</h1>
            </div>
         <TopGeners />
        </div>
        <div className='pt-4'>
            <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
                <h1 className='text-xl font-bold text-white cursor-pointer'>Top 10 CMV</h1>
            </div>
                <div className='py-4'>
                    <Card2 details={CardData}/> 
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex justify-between items-center ml-4 whitespace-nowrap mt-4'>
                <h1 className='text-xl font-bold text-white cursor-pointer'>Made For You</h1>
                    <button>
                    <p className=' text-white font-thin mr-4'>View all</p>
                    </button>
            </div>
            <div className='py-4'>
                <Card details={CardData} />
            </div>
        </div>
        
         
         
    </div>
  )
}

export default Search