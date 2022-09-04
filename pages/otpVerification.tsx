import React, { Component } from 'react';
import OtpInput from 'react-otp-input';
import Timer from '../components/Timer'
import TestAnimation from '../components/TestAnimation'
import Link from 'next/link'

export default class App extends Component {
  state = { otp: '' };

  handleChange = (otp) => this.setState({ otp });

  

  render() {
    return (
      <div className='grid place-items-center font-body bg-white'>
        
        <div className='mt-6 mb-4'>
           <TestAnimation />
        </div>
        <div className='text-center text-xl'>
            <h1 className='font-bold'>Verification</h1>
            <p className='font-light mt-2'>Enter 4 digit number that sent<br/>to the Email on your device</p>
        </div>
      <div className='place-items-stretch mt-14 justify-items-center'>
        <div className=''>
        <OtpInput
          className='border-2 rounded-xl p-6 border-slate-400 mx-2'
          value={this.state.otp}
          onChange={this.handleChange}
          numInputs={4}
          separator={<span></span>}
        />
        </div>
        
      </div>
      <div className='w-full px-3'>
           <Link href='home'>
            <button className='w-full rounded-lg py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
            </Link>  
      </div> 
      <div className='pb-4'>
      <Timer/>
      </div>
        
      </div>
      
     
   
    );
  }
}