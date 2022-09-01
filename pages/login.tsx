import React,{useState} from 'react'
import 'react-phone-number-input/style.css'

import Link from "next/link"
import { Input } from '@mui/material'

const Phone = () => {
  
  const [num, setNum] = useState('');
  

  const handleNumChange = event => {
    const limit = 11;
    setNum(event.target.value.slice(0, limit));
  };
  
    

  return (
    <div className='bg-slate-900 h-screen grid place-items-center font-body'>
      <div className='m-2 p-2 text-white'>
          <div>
            <h1>Enter your Mobile Number</h1>
            <form>
            <Input className='w-full py-3 my-2 bg-white text-xl'
            type="tel"
            id="num"
            name="num"
            value={num}
            onChange={handleNumChange}             
      />
            </form>
          </div>
          <div>
            <p className='mt-6 w-full py-4'>By continuing, you agree to our terms and conditions</p>
            <Link href='otpVerification'>
            <button className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
            </Link>
          </div>

      </div>
      
    </div>
  )
}

export default Phone
