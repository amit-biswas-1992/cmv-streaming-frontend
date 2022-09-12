import Link from 'next/link'


const Modal2 = ({visible, onClose}) => {
   if(!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
        
        <div className='bg-white rounded-md'>
            <button className='p-3 ml-60 text-black' onClick={onClose}>X</button>
            <div className='text-center p-6'>
            <h1 className='text-2xl text-black mb-4'>Please Subscribe</h1>         
            <div className='bg-purple-600 rounded-lg p-3'>
              <Link href='../../package/purchase'>
               <button className='text-white'>Buy Package</button>
              </Link>
              
            </div>
            </div>
           
        </div>


    </div>
  )
}

export default Modal2