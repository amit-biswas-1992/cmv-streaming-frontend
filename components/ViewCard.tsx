import React from 'react'

const CardContinue = (props) => {
  return (
    <div className=''>

    
    <div className='grid grid-cols-3 gap-4'>
    {props.details.map( (value,index)=>(

     <div className='my-3' key={index}>

          
       
        <img className='' src={value.img.src} />
              <div className='whitespace-nowrap text-white items-center align-middle'>
                <h1 className='text-white'>{value.title}</h1>
                <p className='text-cyan-400'>{value.catagory}</p>
              </div>   
    </div>
    ))}

    </div>
    </div>
  )
}

export default CardContinue