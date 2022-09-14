import Image from "next/image";
import Link from "next/link";
import style from "../components/release.module.css";
import { IMAGE_BASE_URL } from "../utils/constants";

const NewRelease = ({ data }) => {
  const tag = "NewRelease";
  const myLoader = ({ src, width, quality }) => {
    return `${IMAGE_BASE_URL}/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="pt-4">
      <div className="flex justify-between items-center ml-4 whitespace-nowrap mt-4">
        <h1 className="text-xl font-bold text-white cursor-pointer">
          New Release
        </h1>

        <Link href={`../tag-wise-media/${tag}`}>
          <button className=" text-white font-thin mr-4">View all</button>
        </Link>
      </div>
      <div>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide overscroll-x-contain ml-4 cursor-pointer mt-4">
          {data.map((curElem) => (
            <div className={style.container} key={curElem.id}>
              <Link
                className={style.container}
                href={`/content-original/preview-new/${curElem.id}`}
              >
                <a>
                  <Image
                    className="rounded-2xl"
                    loader={myLoader}
                    src={curElem.cover}
                    width={300}
                    height={350}
                    alt=""
                  />
                </a>
              </Link>

              <div className="w-32 whitespace-nowrap text-white items-center align-middle">
                <h1 className="text-white mt-2">{curElem.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewRelease;
