import React, {useState} from 'react'
import Link from 'next/link'
import CardData from '../components/CardData'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'


const ViewAll = () => {
  const [items, setItems] =useState(CardData)
  const filterItem=(catagitem) =>{
    const updatedItems = CardData.filter((curElem)=> {
      return curElem.catagory === catagitem;
    })
    setItems(updatedItems)
  }
  
  
  return (
    <div className='font-body bg-slate-900'>
         <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
            <div className='text-xl text-white flex space-x-3 items-center'> 
                <Link href='home' >
                   <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
                <h1 className='font-light'>View All</h1> 
             </div>           
         </div>
         <div className='grid grid-cols-3 mb-6 lg:grid-cols-6 gap-4 lg:mb-12 px-4'>
          
                        <button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Drama')}>               
                              <h1 className='text-white text-center'>Drama</h1>      
                        </button>
                      
                        <button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Romance')}>               
                              <h1 className='text-white text-center'>Romance</h1>      
                        </button>
                        <button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Horror')}>               
                              <h1 className='text-white text-center'>Horror</h1>      
                        </button><button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Comedy')}>               
                              <h1 className='text-white text-center'>Comedy</h1>      
                        </button>
                        <button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Story')}>               
                              <h1 className='text-white text-center'>Story</h1>      
                        </button>
                        <button className="rounded-md bg-gradient-to-r border-2 border-slate-600 p-4" onClick={()=>filterItem('Mystery')}>               
                              <h1 className='text-white text-center'>Mystery</h1>      
                        </button>

                        
         </div>
                        
                      
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4'>
                       {
                         items.map((elem,index)=>{
                          return(                                                        
                                <div className='' key={index}>
                                  <Link href='moviePreview'>
                                  <Image className='' src={elem.img} alt='' />
                                  </Link> 
                                    <div className='whitespace-nowrap text-white items-center align-middle'>
                                      <h1 className='text-white'>{elem.title}</h1>
                                      <p className='text-cyan-400'>{elem.catagory}</p>
                                    </div>     
                                </div> 
                                                          
                            )
                            
                        }
                        )
                      }
          </div>
          <div className='pb-24'>
          </div>           
                        

                       
            
        
</div>
  )
}

export default ViewAll