import TestAnimation from '../components/TestAnimation'
import Link from 'next/Link'



const Phone = () => {

  
  return (
    <div className='grid place-items-center font-body'>
        
      <div className=''>
        <div className='mt-6 mb-4'>
           <TestAnimation />
        </div>
          

          <div className='text-center text-xl'>
            <h1 className='font-bold'>Verification</h1>
            <p className='font-thin mt-2'>Enter 4 digit number that sent<br/>to the Email on your device</p>
          </div>

        <div className='m-4 p-2'>
          <div className='grid grid-cols-4 gap-6 place-items-stretch mt-16 justify-items-center'>
            <form>
              <input className='w-20 h-20 py-4 my-4 border-2 rounded-xl'/>
            </form>
            <form>
              <input className='w-20 h-20 py-4 my-4 border-2 rounded-xl'/>
            </form>
            <form>
              <input className='w-20 h-20 py-4 my-4 border-2 rounded-xl'/>
            </form>
            <form>
              <input className='w-20 h-20 my-4 border-2 rounded-xl'/>
            </form>
          </div>
          <div className=''>
           <Link href='/Home'>
            <button className='w-full rounded-lg py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
            </Link>  
          </div> 
        </div> 


      </div>
      <div>
        <p className='mt-6 w-full py-4 text-red-500 text-center'>Re-send code in 0:30</p>
      </div>
    </div>  
   
      
    
  )
}

export default Phone