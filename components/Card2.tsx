import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
import Image from 'next/image'

const Card2 = (props) => {
  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer">
      {props.details.map((value, index) => (
        <div
          className="bg-slate-800 rounded-lg p-4 pr-24 w-full flex flex-nowrap"
          key={index}
        >
          <Image className="w-24 h-18 rounded-xl" src={value.img} alt="" />
          <div className="whitespace-nowrap p-6 break-words ml-1 text-white items-center inline-block align-middle py-10">
            <h1>{value.title}</h1>
            <p>
              {value.year} | {value.time}
            </p>
            <h1 className="text-lg text-cyan-400">{value.catagory}</h1>
          </div>
          <div className="text-cyan-400 py-14 pr-4 pl-4 text-4xl hover:text-white">
            <Link href="../content/preview">
              <button>
                <FontAwesomeIcon icon={faCirclePlay} />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card2;
