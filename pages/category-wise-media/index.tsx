import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { callApiGetWithoutToken } from '../../services/api.service';
import { CATAGORY_IMAGE_BASE_URL } from '../../utils/constants';

export const getServerSideProps = async () => {

  const data = await callApiGetWithoutToken("/core/findall-media-category");

  return {
    props: {
      data,
    },
  };
};
const CatagoryTile = (data) => {
  const myLoader = ({ src, width, quality }) => {
    return `${CATAGORY_IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`
  }
  console.log(data.data, "category data");


  return (
    <div className='bg-slate-900 font-body min-h-screen'>
      <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
        <div className='text-xl text-white flex space-x-3 items-center'>
          <Link href='../home'><a>
            <FontAwesomeIcon icon={faArrowLeft} /></a>
          </Link>

          <h1 className='font-light'>All Catagory</h1>
        </div>
      </div>
      <div className='mx-8 mt-8'>
        <div className='grid grid-cols-2 gap-6 2xl:grid-cols-4'>

          {data?.data.map((curElem) => (

            <div key={curElem.id}>

              <Link href={`category-wise-media/${curElem.id}`}><a>
                <Image className='rounded-sm' loader={myLoader}
                  src={curElem.cover_photo} width={350} height={150} alt='' /></a>
              </Link>
              {/* <p className='mr-12'></p> */}

            </div>


          ))}



        </div>


      </div>
    </div>

  )
}

export default CatagoryTile