import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { callApiGetWithoutToken } from "../services/api.service"
import { IMAGE_BASE_URL } from '../utils/constants'



export const getServerSideProps = async () => {
  const data = await callApiGetWithoutToken("/core/tag-wise-media-view-all/NewRelease");
  return {
    props: {
      data,
    },
  };
};
const ViewComp = ({ data }) => {
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <div className='font-body bg-slate-900 h-full'>
      <div className='pt-4 text-white mb-4'>
        <div className='text-2xl font-thin text-white ml-4'>
          <Link href='../home'>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
        <h1 className='text-xl grid place-items-center'>View</h1>
      </div>



      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4'>
        {
          data.map((curElem) => {
            return (
              <div className='' key={curElem.id}>
                <Link href='../content-original/preview'><a>
                  <Image className='rounded-2xl' loader={myLoader}
                    src={curElem.cover} width={300} height={350} alt='' /></a>
                </Link>
                <div className='whitespace-nowrap text-white items-center align-middle'>
                  <h1 className='text-white'>{curElem.title}</h1>
                  <p className='text-cyan-400'>{'catagory'}</p>
                </div>
              </div>

            )

          }
          )
        }
      </div>
      <div className='pb-24'>
      </div>





    </div>
  )
}

export default ViewComp