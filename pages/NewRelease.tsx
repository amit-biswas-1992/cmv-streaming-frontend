import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from '../node_modules/next/link'
import CardNewRelease from '../components/CardNewRelease'
import CardData from '../components/CardData'


const NewRelease = () => {
  return (
    <div className='bg-slate-900 font-body min-h-screen'>
        <div className='ml-4 pt-4 mb-4'>
            <div className='text-xl text-white'>
                <Link href='/Home'>
                <FontAwesomeIcon icon={faArrowLeft}/>
                </Link>
                <h1 className='font-semibold text-white text-center'>New Release</h1> 
            </div>             
        </div>
        <div className='grid grid-cols-2 justify-between items-center ml-4 whitespace-nowrap mt-4'>
            <h1 className='text-xl text-white cursor-pointer'>Comedy</h1>
            <p className=' text-white ml-auto mr-8 cursor-pointer'>View all</p>
        </div>
        <div>
            <CardNewRelease details={CardData} />
        </div>
        <div>
            <CardNewRelease details={CardData} />
        </div>
        
    </div>
  )
}

export default NewRelease