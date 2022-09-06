import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {Explore, NewRelease, MostRecent, TrendingNow, Exclusive, ContinueWatching, Teaser, OnlyMade, HomeCorasoul} from '../components/index'
import Navigation from '../components/Navigation'
import Image from 'next/image'
import Avatar from '../components/assets/test.png'
import Link from 'next/link'



const Home = () => {
  return (
    <div className='bg-slate-900 font-body'>
        <div className='pt-3'>
            <div className='flex items-center'>
                <div className='ml-4 mt-4 flex space-x-3 items-center'>
                    <div className='w-16 pt-2'>
                        <Link href='../profile/profile'>
                            <a >

 <Image className='rounded-full ring-cyan-400 cursor-pointer' src={Avatar} alt=''/>
                    
                            </a>
                     </Link>
                    </div>
                   
                   
                    <div className='text-white'>
                        <p className='text-xl font-semibold whitespace-nowrap'>Hi Ishtiaq!</p>
                        <p className='whitespace-nowrap'>You have remain 15 days</p>
                    </div>
                </div> 
                <div className='text-white ml-auto mr-5 text-3xl mt-4'> 
                <button>
                    <Link href='search'>
                    <FontAwesomeIcon icon={faSearch}/>
                    </Link>
                </button>            

                
                </div>  
            </div>
        </div>
        
               

        <HomeCorasoul/>
       
        <Explore />       
        <NewRelease />      
        <MostRecent />      
        <TrendingNow />
        <Exclusive />
        <ContinueWatching />
        <Teaser />
        <OnlyMade />
    
          <Navigation />
      
       







        





    </div>
  )
}

export default Home