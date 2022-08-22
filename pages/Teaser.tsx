
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faEllipsis, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import image from '../components/assets/4.jpg'

const Teaser = () => {
  return (
    <div className='bg-slate-900 font-body text-white min-h-screen'>
        <div className=''>
                <div className='relative'>
                    
                    <div className='w-full h-full object-fit absolute mix-blend-overlay'>
                      <img className='' src={image.src} alt='' />
                    </div>
                                      
                </div> 
                <div className='flex mx-4 pt-4 text-xl'>
                        <FontAwesomeIcon icon={faArrowLeft}/>  
                        <></>
                        <FontAwesomeIcon icon={faEllipsis} className='ml-auto'/> 
                    </div>     
        </div>
        <div className='pt-52 mx-4'>
            <div>
                <p className='text-cyan-400 text-sm'>Romance</p>
                <p className='text-xl mt-2 font-semibold'>College Crush Official Trailer</p>
            </div>
            <div className='mb-7 mt-4'>
                <p className='my-2 text-lg font-semibold'>College Crush</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod modi delectus omnis at dicta repellendus ducimus debitis. Quisquam fugiat laudantium in reprehenderit error ut, illo eos. Ipsam suscipit molestias tempore.</p>
            </div>
            <div className='mb-7 mt-4'>
                <p className='my-2 text-lg font-semibold'>Cast</p>
                <p className='text-sm'>Tasnuva Tisha, Bari Mondol, Ghum parano mashi pishi</p>
            </div>
            <div className='mb-7 mt-4'>
                <p className='my-2 text-lg font-semibold'>Script and Director</p>
                <p className='text-sm'>Nayem Milton, Biddut Ray</p>
            </div>
                
         </div>
    </div>    

    
  )
}

export default Teaser