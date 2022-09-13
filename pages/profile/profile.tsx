import {
  faAngleRight,
  faArrowLeft,
  faGift,
  faPenToSquare,
  faRightFromBracket,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { USER_PROFILE_IMAGE_BASE_URL } from "../../utils/constants";

const Profile = () => {
  const [customerinfo, setCustomerinfo] = useState("");
  const [userinfo, setUserinfo] = useState("");
  // console.log(userinfo, "info holo user er");
  useEffect(() => {
    const CustomerData = JSON.parse(localStorage.getItem("customer_info"));
    setCustomerinfo(CustomerData);

    const UserData = JSON.parse(localStorage.getItem("user_info"));
    setUserinfo(UserData);
    // console.log(UserData, "data holo user er");
  }, []);

  const myLoader = ({ src, width, quality }) => {
    return `${USER_PROFILE_IMAGE_BASE_URL}/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <div className="bg-slate-900 min-h-screen font-body text-white">
      <div className="grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch">
        <div className="text-xl text-white flex space-x-3 items-center">
          <Link href="../home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h1 className="font-light">Back</h1>
        </div>
        <div className=" text-white font-thin mr-4 ml-auto text-2xl relative">
          <Link href="../profile/edit-profile">
            <button>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="bg-cyan-400 rounded-full p-6 px-7 ring-2 ring-white">
          {userinfo && userinfo.user_image ? (
            <Image
              className="rounded-2xl"
              loader={myLoader}
              src={userinfo.user_image}
              width={300}
              height={350}
              alt=""
            />
          ) : (
            <FontAwesomeIcon icon={faUserTie} />
          )}
        </div>
        <div className="mt-3 grid place-items-center">
          <h1>{customerinfo ? customerinfo.name : "Hello there!!"}</h1>
          <p>{customerinfo ? customerinfo.phone : ""}</p>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
        <h1>-------------</h1>
      </div> */}

      {customerinfo && customerinfo.is_subscribed && (
        <div className="flex justify-center mt-4">
          <FontAwesomeIcon icon={faGift} className="bg-purple-600 p-4" />
          <Link href="../../package/bonus">
            <button className="bg-purple-600 pr-6">Collect Bonus</button>
          </Link>
        </div>
      )}

      {customerinfo && customerinfo.is_subscribed && (
        <div>
          <div className="bg-slate-700 mx-6 mt-8 rounded-xl">
            <div className="flex text-white py-4 ml-4">
              <div className="text-sm">
                <p>{customerinfo.package_name}</p>
                <p className=" text-slate-300">{customerinfo.validity} Days</p>
              </div>
              <h1 className="font-bold ml-auto mr-12 text-center mt-2 text-xl">
                {customerinfo.price} BDT
              </h1>
            </div>
          </div>
        </div>
      )}

      <div className="mx-6">
        <div className="flex items-center py-8">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon={faStar}
              className="bg-white text-slate-500 p-2 rounded-xl"
            />
            <h1>FAQ</h1>
          </div>
          <Link href="../faq/faq">
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-white ml-auto cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="bg-white text-slate-500 p-2 rounded-xl"
            />
            <h1>Log Out</h1>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        {customerinfo && customerinfo.is_subscribed ? (
          <button className="bg-red-500 p-1 rounded-md px-2 text-center">
            Unsubscribe
          </button>
        ) : (
          <Link href="../package/purchase">
            <a>
              <button className="bg-cyan-500 p-1 rounded-md px-2">
                Subscribe
              </button>
            </a>
          </Link>
        )}
      </div>

      <div className="mt-6 pb-20 flex justify-center"></div>
    </div>
  );
};

export default Profile;
