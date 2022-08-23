import Link from 'next/Link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const CatagoryTile = () => {
  return (
    <div className='bg-slate-900 font-body min-h-screen'>
         <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>
              <Link href='./Home'>
               <FontAwesomeIcon icon={faArrowLeft}/>
              </Link>
                
                <h1 className='font-light'>Catagory</h1> 
             </div>           
         </div>
        <div className='mx-8 mt-8'>
        <div className='grid grid-cols-2 gap-6'>
                            <div className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
                              <h1 className='text-white text-center'>Drama</h1>
                            </div>  
                            <div className="rounded-md bg-gradient-to-r from-red-500 via-red-600 to-pink-500 p-4">
                              <h1 className='text-white text-center'>Romance</h1>
                            </div>   
                            <div className="rounded-md bg-gradient-to-bl from-teal-700 via-emerald-400 to-cyan-600 p-4">
                              <h1 className='text-white text-center'>Comedy</h1>
                            </div>  
                            <div className="rounded-md bg-gradient-to-bl from-stone-400 via-neutral-400 to-slate-600 p-4">
                              <h1 className='text-white text-center'>Horror</h1>
                            </div>
                            <div className="rounded-md bg-gradient-to-bl from-blue-400 via-neutral-400 to-cyan-600 p-4">
                              <h1 className='text-white text-center'>Thriller</h1>
                            </div>
                    
        </div>                                      
                            
                         
        </div>
        </div>

  )
}

export default CatagoryTile