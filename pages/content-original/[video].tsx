import dynamic from "next/dynamic";
// import { callApiGetWithoutToken } from "../../../services/api.service";

// export const getServerSideProps = async (context) => {
//   const id = context.params.id;

//   const data = await callApiGetWithoutToken(
//     `/core/media-content-preview/${id}`
//   );

//   return {
//     props: {
//       data,
//     },
//   };
// };
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Video_page = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <div className=" bg-slate-900 pt-4">
        <div className="relative px-4">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=PFd5s0bHgAQ"
            controls
          />
          <div className="absolute top-0 left-0 w-full h-[40px] p-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Video_page;
