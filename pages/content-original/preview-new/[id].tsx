import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { callApiGetWithoutToken } from "../../../services/api.service";
import { IMAGE_BASE_URL } from "../../../utils/constants";
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
  console.log("id pacchi", data);
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
            <div className="pl-4">
              <ReactPlayer url={data.media_source} controls />
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
                {data.category_name} | {data.duration}
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
