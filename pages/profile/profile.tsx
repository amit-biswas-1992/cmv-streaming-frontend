import {
  faAngleRight,
  faArrowLeft,
  faGift,
  faPenToSquare,
  faRightFromBracket,
  faRightToBracket,
  faStar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { subscribeinfo, UserInfo } from "../../models";
import { callApi } from "../../services/api.service";
import { USER_PROFILE_IMAGE_BASE_URL } from "../../utils/constants";
import profileimg from "../../components/assets/profile-picture.png"

const Profile = () => {
  const router = useRouter();

  const myLoader = ({ src, width, quality }) => {
    return `${USER_PROFILE_IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75
      }`;
  };

  const handleLogOut = () => {
    localStorage.clear();
    router.push("../");
  };

  const [subscribeinfo, setSubscribeinfo] = useState<subscribeinfo>({});
  const [userinfo, setUserinfo] = useState<UserInfo>({});
  // console.log(userinfo, subscribeinfo, "both ingo");
  // console.log(userinfo, "info holo user er");
  const apiCall = async () => {
    const data = { userinfo };
    const url = "/core/get-user-profile/";
    try {
      const ApiCall = await callApi(url);
      // console.log(ApiCall.user, "ApiCall.user");

      setUserinfo(ApiCall.user);
      setSubscribeinfo(ApiCall.subscribe_info);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  // console.log(UserData, "data holo user er");
  return (
    <div className="bg-slate-900 min-h-screen font-body text-white">
      <div className="grid grid-cols-2 ml-4 pt-4 mb-4 justify-items-stretch">
        <div className="text-xl cursor-pointer text-white flex space-x-3 items-center">
          <Link href="../home">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>

        </div>
        {userinfo ? (
          <div className=" text-white font-thin mr-4 ml-auto text-2xl relative">
            <Link href="../profile/edit-profile">
              <button>
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="grid  place-items-center ">
        <div className="w-24 h-24 overflow-hidden  rounded-full border-2 border-white">
          {userinfo && userinfo.user_image ? (
            <Image
              className="rounded-full"
              loader={myLoader}
              src={userinfo.user_image}
              width={500}
              height={500}
              layout="responsive"
              quality={100}
              alt="userImage"
            />
          ) : (
            <div className=" rounded-full w-full ring-2 ring-white">
              {/* <FontAwesomeIcon icon={faUserTie} /> */}
              <Image src={profileimg} alt="userImage " />
            </div>
          )}
        </div>


        <div className="mt-3 grid place-items-center">
          <h1 className=" " >{userinfo ? userinfo.name : "Hello there!!"}</h1>
          <p>{userinfo ? userinfo.phone : ""}</p>
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
          <h1>-------------</h1>
        </div> */}

      {subscribeinfo ? (
        <div>
          <div className="flex justify-center mt-4">
            <FontAwesomeIcon icon={faGift} className="bg-purple-600 p-4" />
            <Link href="../../package/bonus">
              <button className="bg-purple-600 pr-6">Collect Bonus</button>
            </Link>
          </div>
          <div>
            <div className="bg-slate-700 mx-6 mt-8 rounded-xl">
              <div className="flex text-white py-4 ml-4">
                <div className="text-sm">
                  <p>{subscribeinfo?.package?.name}</p>
                  <p className=" text-slate-300">{subscribeinfo?.package?.validity} Days</p>
                </div>
                <h1 className="font-bold ml-auto mr-12 text-center mt-2 text-xl">
                  {subscribeinfo?.package?.price} BDT
                </h1>
              </div>
            </div>
          </div>
        </div>) : (
        <div></div>
      )


      }



      <div className="mx-6">
        <Link href="../faq/faq">
          <div className="flex items-center py-8 cursor-pointer">
            <div className="flex items-center space-x-3">
              <FontAwesomeIcon
                icon={faStar}
                className="bg-white text-slate-500 p-2 rounded-xl"
              />
              <h1>FAQ</h1>
            </div>

            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-white ml-auto "
            />

          </div>
        </Link>
        <div className="flex items-center">
          {userinfo ? (
            <div
              onClick={handleLogOut}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="bg-white text-slate-500 p-2 rounded-xl"
              />
              <h1>Log Out</h1>
            </div>
          ) : (
            <Link href="../../auth/register">
              <a>
                <div className="flex items-center space-x-3 cursor-pointer">
                  <FontAwesomeIcon
                    icon={faRightToBracket}
                    className="bg-white text-slate-500 p-2 rounded-xl"
                  />
                  <h1>Log In</h1>
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
      <div className="mt-6 text-center">
        {subscribeinfo ? (
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
