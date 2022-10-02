import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { searchApi } from '../../services/api.service'
import { IMAGE_BASE_URL } from '../../utils/constants'

const Search = () => {
  const router = useRouter()
  console.log(router.query.search);
  const [searchData, setSearchData] = useState([])
  console.log(searchData, "searchDatainpage");

  const searchValue = router.query.search;
  console.log(searchValue, "searchValue");

  const SearchApiCall = async () => {
    // console.log("useeffectheat");

    const datakeys = { searchValue };
    console.log(datakeys, "datakeys");

    const url = "/core/search-media-content/";
    try {
      const data = await searchApi(url, datakeys);
      console.log("dataforsearch", data);
      setSearchData(data)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // declare the data fetching function

    // call the function
    SearchApiCall()
      // make sure to catch any error
      .catch(console.error);
  }, [searchValue])

  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };


  return (
    <div className='bg-slate-900 font-body'>

      <div className='mx-4 pt-4'>
        <Link href='../home'>
          <a>
            <FontAwesomeIcon className='text-2xl font-thin text-white mb-4' icon={faArrowLeft} />
          </a>
        </Link>
        {/* <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-6">
            <FontAwesomeIcon className='text-slate-500 text-2xl' icon={faSearch} />
          </span>
          <input className="placeholder:text-slate-500 block bg-slate-700 w-full rounded-full py-4 pl-5 pr-3 shadow-sm focus:outline-none focus:border-slate-800 focus:ring-slate-800 focus:ring-1 text-lg" placeholder="Search" type="text" name="search" />
        </label> */}
      </div>
      <div className=''>
        <div className='font-body bg-slate-900 h-full'>
          <div className='grid grid-cols-2 ml-4 pt-8 mb-4 justify-items-stretch'>
          </div>



          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4'>
            {
              searchData.map((elem) => {
                return (
                  <div className='' key={elem.category_id}>
                    <Link href={`/content-original/preview-new/${elem.id}`}>
                      <a>
                        <Image
                          className="rounded-2xl"
                          loader={myLoader}
                          src={elem.cover}
                          width={300}
                          height={350}
                          alt=""
                        />
                      </a>
                    </Link>
                    <div className='whitespace-nowrap text-white items-center align-middle'>
                      <h1 className='text-white'>{elem.title}</h1>
                      <p className='text-cyan-400'>{elem.category_name}</p>
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
      </div>





    </div>
  )
}

export default Search