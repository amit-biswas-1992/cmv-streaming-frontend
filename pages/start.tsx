import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from '../components/assets/CMV.png'
import BG from '../components/assets/image 25.jpg'

const Start = () => {

    
  return (
    <div className="">
      <div className="w-full h-full bg-slate-900/80 absolute font-body">

      </div>

      <div className="text-white relative">

                <div className="grid place-items-center pt-6 pb-40">
                <Image className="h-8" src={Logo} alt='' />
                </div>

            
              <div className="mt-44">
                <div className=''>
                    <div className="px-4">
                        <h3 className="text-lg px-5 text-center">
                        First time in Bangladesh Unlimited Drama only on{" "}
                        <span className="text-blue-400">CMV DRAMA</span>
                        </h3>
                    </div>
                    <div className="grid fixed bottom-20 inset-x-0 z-50 place-items-center px-8">
                        <Link href='login'>
                        <button className="rounded-2xl w-full py-4 my-4 mt-8 bg-sky-600 hover:bg-sky-700 text-white text-center">
                        Registration
                        </button>
                        </Link>
                        <Link href='buyPackage'>
                        <button className="mt-2 grid place-items-center text-center">Log In</button>
                        </Link>
                    </div>
                </div>
              </div> 

      </div>
    </div>
  );
};

export default Start;
