import UpcomingCard from '../components/UpcomingCard'
import CardData2 from '../components/CardData2' 

const Upcoming = () => {
  return (
    <div className='bg-slate-900 font-body text-white'>
        <div className='flex justify-center space-x-3 py-8'>
            <h1 className='hover:bg-cyan-400 p-2 rounded-2xl'>Coming Soon</h1>
            <h1 className='hover:bg-cyan-400 py-2 px-5 rounded-2xl'>Exclusive</h1>

        </div>
        
        <UpcomingCard details={CardData2}/>
    </div>
  )
}

export default Upcoming