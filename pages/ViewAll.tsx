import React, {useState} from 'react'
import Link from '../node_modules/next/link'
import CardData from '../components/CardData'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Image from '../node_modules/next/image'

const ViewAll = () => {
  const [items, setItems] =useState(CardData)
  const filterItem=(catagitem) =>{
    const updatedItems = CardData.filter((curElem)=> {
      return curElem.catagory === catagitem;

    })
    setItems(updatedItems)
  }
  
  
  return (
    <div className='bg-slate-900 font-body min-h-screen'>
         <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'>  
                <FontAwesomeIcon icon={faArrowLeft}/>
                <h1 className='font-light'>Romance</h1> 
             </div>           
         </div>
         <div className='space-x-2 mb-4 px-6'>
                        <button className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4" onClick={()=>filterItem('Drama')}>               
                              <h1 className='text-white text-center'>Drama</h1>      
                        </button>
                        <button className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4" onClick={()=>filterItem('Romance')}>               
                              <h1 className='text-white text-center'>Romance</h1>      
                        </button>
                        <button className="rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4" onClick={()=>filterItem('Horror')}>               
                              <h1 className='text-white text-center'>Horror</h1>      
                        </button>
                        
         </div>
                        
                        
          <div className='grid grid-cols-3 gap-3 px-4'>
                       {
                         items.map((elem)=>{
                          return(                             
                                <div className='' key={'index'}>
                                  <Link href='/MoviePreview'>
                                  <Image className='' src={elem.img.src} alt='' />
                                  </Link> 
                                    <div className='whitespace-nowrap text-white items-center align-middle'>
                                      <h1 className='text-white mt-3'>{elem.title}</h1>
                                      <p className='text-cyan-400'>{elem.catagory}</p>
                                    </div> 
                                     
                                </div> 
                                                          
                            )
                            
                        }
                        )
                      }
          </div>           
                        

                       
            
        
</div>
  )
}

export default ViewAll