import Link from "next/Link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faEllipsis, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import image from '../components/assets/4.jpg'
import image2 from '../components/assets/2.jpg'
import Image from "../node_modules/next/image";

const Teaser = () => {
  return (
    <div className='bg-slate-900 font-body text-white'>
        <div className=''>
                
                <div className='flex mx-4 pt-4 text-xl'>
                    <Link href='/Home'>
                     <FontAwesomeIcon icon={faArrowLeft}/>  
                    </Link>
                        
                        <></>
                        <FontAwesomeIcon icon={faEllipsis} className='ml-auto'/> 
                    </div> 
                    <div className=''>
                    
                    <div className='w-full h-full mt-6'>
                      <Image className='' src={image.src} alt='' />
                    </div>
                                      
                </div>     
        </div>
        <div className='pt-8 mx-4'>
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
            <div className='mt-4'>
                <p className='my-2 text-lg font-semibold'>Script and Director</p>
                <p className='text-sm'>Nayem Milton, Biddut Ray</p>
            </div>
            <div className='mt-8 pb-4'>
                <p className='text-sm mb-2'>Relate Movies</p>
                <div className='w-full h-full'>
                      <Image className='rounded-lg' src={image2.src} alt='' />
                </div>
                
            </div>
                
         </div>
    </div>    

    
  )
}

export default Teaser