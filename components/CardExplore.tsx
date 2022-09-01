import React from 'react'
import Link from 'next/link'

const CardExplore = () => {
  return (
    <div>
              <div className='flex flex-nowrap mt-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-2 cursor-pointer'>
                            <div className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ml-2">
                              <Link href='viewAll_page'>
                              <button className='text-white py-4 px-12 text-center'>Drama</button>
                              </Link>
                            </div>  
                            <div className="rounded-md bg-gradient-to-r from-red-500 via-red-600 to-pink-500 ml-2">
                              <h1 className='text-white py-4 px-9 text-center'>Romance</h1>
                            </div>   
                            <div className="rounded-md bg-gradient-to-bl from-teal-700 via-emerald-400 to-cyan-600 ml-2">
                            <Link href='faq_page'>
                              <button className='text-white py-4 px-10 text-center'>Comedy</button>
                              </Link>
                            </div>  
                            <div className="rounded-md bg-gradient-to-bl from-stone-400 via-neutral-400 to-slate-600 ml-2">
                              <h1 className='text-white py-4 px-12 text-center'>Horror</h1>
                            </div>
                            <div className="rounded-md bg-gradient-to-bl from-green-700 via-emerald-400 to-red-600 ml-2">
                              <h1 className='text-white py-4 px-14 text-center'>Story</h1>
                            </div>  
                            <div className="rounded-md bg-gradient-to-bl from-yellow-400 via-neutral-400 to-red-600 ml-2">
                              <h1 className='text-white py-4 px-11 text-center'>Mystery</h1>
                            </div> 
                            </div>                                      
                            
                         
          </div>
  )
}

export default CardExplore