import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {Explore, NewRelease, MostRecent, TrendingNow, Exclusive, ContinueWatching, Teaser} from '../components'
import Corasoul from '../components/Home Corasoul/Corasoul'
import Navigation from '../components/Navigation'
import Link from 'next/Link'





const Home = () => {
  return (
    <div className='bg-slate-900 font-body'>
        <div className='first Segment pt-8'>
            <div className='grid grid-cols-2'>
                <div className='ml-4 mt-4 flex space-x-3 items-center'>
                    <Link href='/More'>
                <img className='h-12 rounded-full ring-offset-2 ring-2 cursor-pointer' src="/ash.png" />
                </Link>
                    <div className='text-white'>
                        <p className='text-2xl font-semibold whitespace-nowrap'>Hi Ishtiaq!</p>
                        <p className='whitespace-nowrap'>You have remain 15 days</p>
                    </div>
                </div> 
                <div className='text-white ml-auto mr-5 text-2xl mt-7'>                 
                <FontAwesomeIcon icon={faSearch}/>
                </div>  
            </div>
        </div>
        
               

        <Corasoul />
        <Explore />       
        <NewRelease />      
        <MostRecent />
        
        <TrendingNow />
        <Exclusive />
        <ContinueWatching />
        <Teaser />
        <Navigation />






        





    </div>
  )
}

export default Home