import { useState } from 'react';
import 'react-phone-number-input/style.css';

import Link from "next/link";

const Register = () => {
  
  const [value, setValue] = useState('');


  const handleValueChange = event => {
 
    setValue(event.target.value)
  };
  
    

  return (
    <div className='bg-slate-900 grid place-items-center font-body'>
      <div className='m-2 p-2 mt-8 text-white'>
      <div className='mx-4'>
      <form action="/send-data-here" method="post">
            <label>Enter your Name</label>
            <input className='w-full py-3 px-3 my-2 bg-white text-xl text-black' type="text" id="text" name="text"
            placeholder='Please Input your name '
            required
            />
         
            
      </form>
          </div>    
          <div className='mx-4'>
            <Link href='../home'>
            <button type="submit" className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
            </Link>
          </div>

      </div>
      
    </div>
  )
}

export default Register
