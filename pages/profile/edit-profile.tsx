// import { callApiPostWithoutToken } from "../../services/api.service";
import { useState } from "react";
// import { callApiGetWithoutToken } from "../../../services/api.service";
const Edit = (props) => {
  const [userinfo, setUserinfo] = useState("");
  const [img, setImg] = useState();
  console.log(userinfo, "username");
  console.log(img, "image");

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

  const onImageChange = (e) => {
    const [file] = e.target.files;
    // setImg(URL.createObjectURL(file));
  };
  return (
    <div>
      <div className="m-2 p-2 mt-24 text-white">
        <div className="mx-4">
          <form>
            <label>Enter your Name</label>
            <input
              className="w-full py-3 my-2 mb-4 bg-white text-xl text-black"
              type="text"
              onChange={(e) => {
                setUserinfo(e.target.value);
              }}
            />
            <label>Enter Image</label>
            <input
              className="w-full py-3 my-2 text-xl text-black"
              type="file"
              onChange={onImageChange}
            />
            <input
              className="w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div className="mx-4">
          {/* <Link href="">
           
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default Edit;
