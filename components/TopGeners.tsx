

import Romantic from './assets/14.png'
import Thriller from './assets/15.png'
import Comedy from './assets/13.png'
import Horror from './assets/12.png'
import Image from '../node_modules/next/image'

const TopGeners = () => {
  
  
  return (
    <div className=''>
        
        <div className='mx-4'>
        <div className='grid grid-cols-2 gap-3'>

                      
                            <div className="rounded-md bg-pink-300 flex items-center px-3 p-2 justify-center">
                              <h1 className='text-white text-center'>Romance</h1>
                              <Image className='ml-auto' src={Romantic.src} alt=''/>   
                            </div> 
                            <div className="rounded-md bg-orange-400 flex items-center px-3 p-2 justify-center">
                              <h1 className='text-white text-center'>Thriller</h1>
                              <Image className='ml-auto' src={Thriller.src} alt='' /> 
                              
                            </div>  
                            <div className="rounded-md bg-blue-700 flex items-center px-3 p-2 justify-center">
                              <h1 className='text-white text-center'>Comedy</h1>
                              <Image className='ml-auto' src={Comedy.src} alt='' /> 
                              
                            </div>  
                            <div className="rounded-md bg-green-600 flex items-center px-3 p-2 justify-center">
                              <h1 className='text-white text-center'>Horror</h1>
                              <Image className='ml-auto' src={Horror.src} alt=''/> 
                              
                            </div>
                           
                    
        </div>  
       
        
                            
                         
        </div>
        </div>

  )
}

export default TopGeners