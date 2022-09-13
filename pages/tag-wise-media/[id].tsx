import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { callApiGetWithoutToken } from "../../services/api.service";
import { IMAGE_BASE_URL } from "../../utils/constants";

export const getServerSideProps = async (context) => {
  const id = context.params.id;
  // console.log(`context`);
  console.log(id, "view");

  // const tag = router.query.viewall;
  // console.log(tag,"tagname");

  const data = await callApiGetWithoutToken(
    `/core/tag-wise-media-view-all/${id}`
  );

  return {
    props: {
      data,
    },
  };
};

const ViewComp = ({ data }) => {
  const router = useRouter();
  console.log("paisi?", data);
  // console.log(`context`);
  // console.log(router.pathname);
  // console.log(router.query.viewall,'viewall');
  // console.log(router.asPath.viewall ,"viewall");
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="font-body bg-slate-900 h-full">
      <div className="pt-4 text-white mb-4">
        <div className="text-2xl font-thin text-white ml-4">
          <Link href="../home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
<<<<<<< HEAD
         
                        
                      
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4'>
                       {
                         data.map((curElem)=>{
                          return(                                                        
                                <div className='' key={curElem.id}>
                                  <Link href={`/content-original/preview-new/${curElem.id}`}><a>
                                  <Image className='rounded-2xl'loader={myLoader}
                  src={curElem.cover} width={300} height={350}  alt=''/></a>
                                  </Link> 
                                    <div className='whitespace-nowrap text-white items-center align-middle'>
                                      <h1 className='text-white'>{curElem.title}</h1>
                                      {/* <p className='text-cyan-400'>{curElem.category}</p> */}
                                    </div>     
                                </div> 
                                                          
                            )
                            
                        }
                        )
                      }
          </div>
          <div className='pb-24'>
          </div>           
                        
=======
        <h1 className="text-xl grid place-items-center">View</h1>
      </div>
>>>>>>> 65105d09e17aeda51535ae0ab228b16c339d7fb3

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
        {data.map((curElem) => {
          return (
            <div className="" key={curElem.id}>
              <Link href={`/content-original/preview-new/${curElem.id}`}>
                <a>
                  <Image
                    className="rounded-2xl"
                    loader={myLoader}
                    src={curElem.cover}
                    width={300}
                    height={350}
                    alt=""
                  />
                </a>
              </Link>
              <div className="whitespace-nowrap text-white items-center align-middle">
                <h1 className="text-white">{curElem.title}</h1>
                {/* <p className='text-cyan-400'>{curElem.category}</p> */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="pb-24"></div>
    </div>
  );
};

export default ViewComp;
