
import Link from 'next/Link'

const Phone = () => {
  return (
    <div className='bg-slate-900 h-screen grid place-items-center'>
      <div className='m-2 p-2 text-white'>
          <div>
            <h1>Enter your Mobile Number</h1>
            <form>
              <input className='w-full py-4 my-4'/>
            </form>
          </div>
          <div>
            <p className='mt-6 w-full py-4'>By continuing, you agree to our terms and conditions</p>
            <Link href='/OtpVerification'>
            <button className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
            </Link>
          </div>

      </div>
      
    </div>
  )
}

export default Phone
