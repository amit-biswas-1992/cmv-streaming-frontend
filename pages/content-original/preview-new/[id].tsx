import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState, useEffect } from "react";
import {
  callApiGetWithoutToken,
  mediaViewCountApi,
} from "../../../services/api.service";
import { IMAGE_BASE_URL } from "../../../utils/constants";
// import srcvideo from "../../../testvideo.mp4"
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const getServerSideProps = async (context) => {
  const id = context.params.id;

  const data = await callApiGetWithoutToken(
    `/core/media-content-preview/${id}`
  );

  return {
    props: {
      data,
    },
  };
};

const Preview = ({ data }) => {
  const router = useRouter();
  console.log(router.query.id, "mediaid");
  const mediaId = router.query.id;
  const [playedTime, setPlayedTime] = useState("");
  const [videoComplete, setVideoComplete] = useState(false);
  // console.log(playedTime, "player on progress time");

  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
  };
  const mediaViewCount = async () => {
    // console.log("function run");

    const datakey = { mediaId };
    const url = "/core/media-content-view-count";
    try {
      const data = await mediaViewCountApi(url, datakey);
    } catch (err) {
      console.log(err);
    }
  };
  const mediaDuration = async (progress: any) => {
    // setPlayedTime(progress.playedSeconds)
    // const playtime: any = playedTime / 60
    console.log("function run on duration", progress);

    localStorage.setItem("totalDurationMedia", progress)
    // localStorage.setItem("playedTime", playtime)


  };
  const mediaprogress = async (progress: any) => {
    setPlayedTime(progress.playedSeconds)
    // const playtime: any = playedTime / 60
    // console.log("function run on duration", playtime);

    localStorage.setItem("playedTime", playedTime)


  };
  const mediaPause = async () => {
    // setPlayedTime(progress.playedSeconds)
    // const playtime: any = playedTime / 60
    // console.log("function run on duration", playtime);
    setVideoComplete(true)
    if (videoComplete) {
      console.log("user complete the video");

    }
    // localStorage.setItem("pauseTime", playedTime)


  };
  useEffect(() => {

    const playedduration = localStorage.getItem("playedTime");
    const pausedata = localStorage.getItem("pauseTime");
    const totalDuration = localStorage.getItem("totalDurationMedia");
    const playedTime = Number(playedduration)
    const pausetime = Number(pausedata)
    const duration = Number(totalDuration)
    if (duration === playedTime) {
      console.log("user complete the video");

    }
    // const userViewTime = duration - pausetime
    // console.log(userViewTime, "userViewTime");

  }, [playedTime]);

  // console.log("id pacchi", data);
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };

  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  return (
    <div className="bg-slate-900 font-body">
      <div className="">
        <div className="pt-4 grid grid-cols-2 ml-4 mb-4 justify-items-stretch">
          <div className="text-2xl font-thin text-white">
            <Link href="../../home">
              <a>
                <FontAwesomeIcon icon={faArrowLeft} />
              </a>
            </Link>
          </div>
          {/* <div className=" text-white font-thin mr-4 ml-auto text-2xl relative">
            <FontAwesomeIcon icon={faHeart} />
          </div> */}
        </div>
      </div>
      <div className="">
        {/* <div className="px-20 lg:w-80">
          <Link href="">
            <a>
              <Image
                className="rounded-2xl"
                loader={myLoader}
                src={data.cover}
                width={300}
                height={350}
                alt=""
              />
            </a>
          </Link>
        </div> */}
        <div className="test-player">
          <div className=" bg-slate-900 pt-4">
            {/* <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ref={videoEl} onLoadedMetadata={handleLoadedMetadata} /> */}
            <div className="min-w-full min-h-full w-auto h-auto bg-cover rounded-2xl">
              <ReactPlayer
                onEnded={mediaPause}
                onProgress={mediaprogress}
                onDuration={mediaDuration}
                onStart={mediaViewCount}
                url={data.media_source}
                controls={true}
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              // ref={videoEl}
              // onLoadedMetadata={handleLoadedMetadata}
              />
            </div>
          </div>
        </div>

        {/* <div className="text-red-400"> */}
        {/* <button onClick={() => setShowModal(true)}> */}
        {/* <Link href="../video">
              <a>
                <FontAwesomeIcon icon={faCirclePlay} className="text-5xl" />
              </a>
            </Link> */}
        {/* </button> */}
        {/* <ModalSubscribe onClose={handleOnClose} visible={showModal} /> */}
        {/* </div> */}
        {/* <p className="mt-3 text-white">Show More</p> */}
        <div className="text-white mx-4"></div>
        <div className="text-xl text-white">
          <div className="font-body">
            <div className="text-white mx-4 mt-8">
              <h1 className="font-bold mt-1 text-3xl">{data.title}</h1>
              <p className="mt-2 text-sm">
                {data?.category?.name} | {data.duration}
              </p>

              {data.details === null ? (
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                  sequi error, distinctio labo
                </p>
              ) : (
                <p className="text-sm">{data.details}</p>
              )}

              {/* <h1 className="font-bold text-lg my-4">Cast</h1> */}
              {/* <p className="text-sm">
                Tasnuva Tisha, Syed Zaman Shaon, Nayan Babu, Kajal Suborno
              </p>
              <h1 className="font-bold text-lg my-4">Script Director</h1>
              <p className="text-sm">Biddut Roy, Animesh Iche</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
