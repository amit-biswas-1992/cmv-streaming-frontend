

import Romantic from './assets/14.png'
import Thriller from './assets/15.png'
import Comedy from './assets/13.png'
import Horror from './assets/12.png'
import Image from 'next/image'

const TopGeners = () => {
  
  
  return (
    <div className=''>
        
        <div className='mx-4'>
        <div className='grid grid-cols-2 gap-3'>

                      
                            <div className="rounded-md bg-pink-300 flex items-center px-3 p-2 justify-center">
                              <h1 className='text-white text-center'>Romance</h1>
                              <div className='ml-auto'>
                               <Image className='' src={Romantic} alt=''/>
                              </div>
                                 
                            </div> 
                            <div className="rounded-md bg-orange-400 flex items-center px-6 p-2">
                              <h1 className='text-white text-center'>Thriller</h1>
                              <div className='ml-auto'>
                              <Image className='' src={Thriller} alt='' /> 
                              </div>
                              
                              
                            </div>  
                            <div className="rounded-md bg-blue-700 flex items-center px-6 p-2 justify-center">
                              <h1 className='text-white text-center'>Comedy</h1>
                              <div className='ml-auto'>
                               <Image className='' src={Comedy} alt='' /> 
                              </div>
                             
                              
                            </div>  
                            <div className="rounded-md bg-green-600 flex items-center px-6 p-2 justify-center">
                              <h1 className='text-white text-center'>Horror</h1>
                              <div className='ml-auto'>
                               <Image className='' src={Horror} alt=''/> 
                              </div>
                              
                              
                            </div>
                           
                    
        </div>  
       
        
                            
                         
        </div>
        </div>

  )
}

export default TopGeners