import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faArrowLeft, faCirclePlay, faAngleUp} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
export const getStaticPaths = async () => {
  const res = await fetch("https://cmv.dvcoreapi.com/api/v1/core/home");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageno: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.pageno;
  const res = await fetch(`https://cmv.dvcoreapi.com/api/v1/core/home/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const myData = ({ data }) => {
  const { id, title, completed } = data;
  return (
    <>
     
     <div className='bg-slate-900 font-body'>    
    
    <div className=''> 
      <div className='grid grid-cols-2 ml-4 pt-2 mb-4 justify-items-stretch'>
          <div className='text-2xl font-thin text-white'>
            <Link href='../home'>
            <a>
             <FontAwesomeIcon icon={faArrowLeft}/>
            </a>
            </Link>
                
          </div>
          <div className=' text-white font-thin mr-4 ml-auto text-2xl relative'>
              <FontAwesomeIcon icon={faHeart}/>   
          </div>
      </div>
      </div>
  <div className=''>
      <div className='px-20 lg:w-80'>
         
        </div>
      
               
      <div className='grid place-items-center text-white'>
          <h1 className='font-bold mt-1'>{title}</h1>
          <p className='mt-2 font-thin'>{id}  |  {id}  | {title}</p>
      </div>
      <div className='grid place-items-center mt-4'>
          <div className='text-cyan-400'>
             <button><FontAwesomeIcon icon={faCirclePlay} className='text-5xl'/></button> 
             
          </div>
          <p className='mt-3 text-white'>Show More</p>
          <div className='text-xl text-white'> 
                    
          </div>
      </div>
      <div className='pb-24'>
      </div>
  </div>

  </div>
    </>
  );
};

export default myData;