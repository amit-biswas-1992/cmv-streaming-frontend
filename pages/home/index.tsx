import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Explore,
  HomeCorasoul,
  MostRecent,
  NewRelease,
  Teaser,
  TrendingNow,
} from "../../components/index";
import Navigation from "../../components/Navigation";
import Search from "../../components/Searchcom";
import { UserInfo } from "../../models";
import { callApi, callApiGetWithoutToken } from "../../services/api.service";
import { USER_PROFILE_IMAGE_BASE_URL } from "../../utils/constants";
import OnlyMade from './../../components/OnlyMade';
import HomeInfo from './../../models/HomeInfo';

export const getServerSideProps = async () => {
  const data = await callApiGetWithoutToken("/core/home");
  // const data2 = await callApifatchWithoutToken("/core/home", { data: { name: 'name' }, headers: { token: '123' } })
  return {
    props: {
      data,
    },
  };
};
const myLoader = ({ src, width, quality }) => {
  // console.log(width, "width user");

  return `${USER_PROFILE_IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
};

const Content = ({ data }) => {
  console.log("data is showing in home page with token", data);
  const [userData, setUserData] = useState<UserInfo>({});
  // console.log(userData, "userdatauser_image");
  // const [homeMediaData, setHomeMediaData] = useState<HomeInfo>();
  // console.log("homeMediaData", homeMediaData);

  // useEffect(() => {

  //   const getApiCall = async () => {

  //     try {
  //       const data: any = await callApi("/core/home");
  //       // console.log("dataforcategory", data);
  //       setHomeMediaData(data)
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   const callApi = async () => {
  //     await getApiCall();
  //   }
  //   callApi();
  // }, [])
  const apiCall = async () => {
    const data = { userData };
    const url = "/core/get-user-profile/";
    try {
      const ApiCall = await callApi(url, data);
      // console.log(ApiCall.user, "ApiCall.user");

      setUserData(ApiCall.user);
      // setCustomerinfo(ApiCall.customer);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    apiCall();
  }, []);

  // const capitalizeFirstLetter = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }

  // useEffect(() => {
  //   const loginData = JSON.parse(localStorage.getItem("user_info"));
  //   // console.log(loginData.notification_text,"loginData");
  //   setUserData(loginData);
  // }, []);
  return (
    <div>
      <div className="bg-slate-900 font-body">
        <div className="pt-3 mb-6">
          <div className=" grid grid-cols-2  items-center gap-x-2 ">
            <div className=" col-span-1">
              <div className="ml-4 mt-4 flex  space-x-3  items-center">
                <Link href="../profile/profile">
                  <a>
                    {userData && userData.user_image ? (
                      <div className="w-10 h-10 xl:w-12 xl:h-12 overflow-hidden  rounded-full border-2 border-white">
                        <Image
                          className=""
                          loader={myLoader}
                          src={userData.user_image}
                          width={500}
                          height={500}
                          layout="responsive"
                          quality={100}
                          // unoptimized
                          alt=" userImage"
                        />
                      </div>
                    ) : (
                      <div className="bg-cyan-400 rounded-full p-4 px-5 ring-2 text-white ring-white">
                        <FontAwesomeIcon icon={faUserTie} />
                      </div>
                    )}
                  </a>
                </Link>
                <div >
                  {userData ? (
                    <div className="text-white">
                      <p className="text-sm xl:text-lg  font-semibold whitespace-nowrap">
                        Hi <span className="capitalize">{userData.name}</span>
                      </p>
                    </div>
                  ) : (
                    <div className="text-white">
                      <p className="text-xl font-semibold whitespace-nowrap">
                        Hi !
                      </p>
                    </div>
                  )}
                </div>

              </div>
            </div>

            <div className=" text-white   col-span-1 mr-5 text-3xl mt-4">
              <Search></Search>
              {/* <Link href="search">
                  <FontAwesomeIcon icon={faSearch} />
                </Link> */}
            </div>
          </div>
        </div>

        <HomeCorasoul data={data.featureVideos} />
        <Explore data={data.mediaContentCategory} />
        <NewRelease data={data.newReleaseVideos} />
        <MostRecent data={data.mostPopularVideos} />
        <TrendingNow data={data.trendingVideos} />
        {/* <ContinueWatching data={data.newReleaseVideos} />  */}
        <Teaser data={data.teaserVideos} />
        <OnlyMade />

        <Navigation />
      </div>
    </div>
  );
};

export default Content;
