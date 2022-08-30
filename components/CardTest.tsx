import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
import Image from "next/image"
const CardTest = (props) => {
  return (
    <div className="flex space-x-3 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer">
      {props.details.map((value, index) => (

        <div className='bg-slate-800 rounded-lg p-4 pr-8 w-full' key={index}>  
            <Image className='rounded-xl' src={value.img} alt='' />     
            <div className="flex">
            <div className="whitespace-nowrap p-6 break-words ml-1 text-white items-center inline-block align-middle py-10">
                <h1>{value.title}</h1>
                <p>
                  {value.year} | {value.time}
                </p>
                <h1 className="text-lg text-cyan-400">{value.catagory}</h1>
              </div>
              <div className="text-cyan-400 py-14 pr-2 pl-auto text-4xl hover:text-white">
                <Link href="moviePreview">
                  <button>
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </button>
                </Link>
              </div>
            </div>       
        </div>
      ))}

    </div>
  );
};

export default CardTest;
