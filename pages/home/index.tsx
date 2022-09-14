import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Avatar from "../../components/assets/test.png";
import {
  Explore,
  HomeCorasoul,
  MostRecent,
  NewRelease,
  Teaser,
  TrendingNow,
} from "../../components/index";
import Navigation from "../../components/Navigation";
import { callApiGetWithoutToken } from "../../services/api.service";

export const getStaticProps = async () => {
  const data = await callApiGetWithoutToken("/core/home");
  // const data2 = await callApifatchWithoutToken("/core/home", { data: { name: 'name' }, headers: { token: '123' } })
  return {
    props: {
      data,
    },
  };
};
const Content = ({ data }) => {
  type UserInfo = {
    createdat?: Date;
    customer_id?: string;
    deletedat?: Date;
    email?: string;
    id?: string;
    name?: string;
    password?: string;
    phone?: string;
    updatedAt?: Date;
    userStatus?: string;
    userType?: string;
    userImage?: string;
  };
  // console.log("data is showing recent", data.mediaContentCategory);
  const [userData, setUserData] = useState<UserInfo>({});
  // console.log(userData, "userdata");

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem("user_info"));
    // console.log(loginData.notification_text,"loginData");
    setUserData(loginData);
  }, []);
  return (
    <div>
      <div className="bg-slate-900 font-body">
        <div className="pt-3 mb-4">
          <div className="flex items-center">
            <div className="ml-4 mt-4 flex space-x-3 items-center">
              <div className="w-12 pt-2">
                <Link href="../profile/profile">
                  <a>
                    <Image
                      className="rounded-full ring-cyan-400 cursor-pointer"
                      src={Avatar}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              {userData ? (
                <div className="text-white">
                  <p className="text-xl font-semibold whitespace-nowrap">
                    Hi {userData.name}!
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
            <div className="text-white ml-auto mr-5 text-3xl mt-4">
              <button>
                <Link href="search">
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </button>
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
        {/* <OnlyMade /> */}

        <Navigation />
      </div>
    </div>
  );
};

export default Content;
