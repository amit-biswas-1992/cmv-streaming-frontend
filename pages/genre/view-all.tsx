import { faArrowLeft, faCirclePlay, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../components/assets/3.jpg'


const view = () => {
  return (


    <div className='text-white bg-slate-900'>
      <div className='grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch'>
        <div className='text-2xl font-thin text-white p-1'>
          <Link href='../catagoryTile'><a>
            <FontAwesomeIcon icon={faArrowLeft} /></a></Link>
        </div>
        <div className=' text-white font-thin mr-4 ml-auto text-2xl relative border p-1 px-2 rounded-lg'>
          <Link href='../search'><a><FontAwesomeIcon icon={faSearch} /></a></Link>
        </div>
      </div>

      <div className='text-center mb-2'>
        <h1>Romantic</h1>
      </div>

      <div className='mx-4'>
        <Image className='rounded-lg' src={image} alt='' />
        <div className='text-xl flex items-center space-x-1 mt-1'>
          <Link href='../content-original/video'><a><FontAwesomeIcon icon={faCirclePlay} /></a></Link>
          <h1>Play Now</h1>
        </div>
      </div>
      <div className='bg-slate-800 mt-6 rounded-t-3xl'>

        <div className=''>
          {props.details.map((value, index) => (
            <div className='' key={index}>


              <div className='pt-4 px-2'>
                <div className='grid grid-cols-3 gap-3 place-items-stretch items-center mx-3'>
                  <div className='w-full'>
                    <Image className='' src={value.img} alt='' />
                  </div>

                  <div className='text-lg'>
                    <h1 className='font-bold whitespace-nowrap'>{value.title}</h1>
                    <p className='font-thin'>{value.year} | {value.time}</p>
                    <p className='font-thin text-cyan-400'>{value.catagory}</p>
                  </div>

                  <div className='text-3xl ml-auto'>
                    <Link href='../content-original/video'><a><FontAwesomeIcon icon={faCirclePlay} /></a></Link>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
      <div className='pb-16'>
      </div>






    </div>


  )
}

export default view