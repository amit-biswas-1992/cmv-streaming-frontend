import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { updateProfileApi } from "../../services/api.service";
const Edit = (props) => {
  const [userinfo, setUserinfo] = useState("");
  const [img, setImg] = useState(null);

  const updateProfile = async () => {
    const data = { userinfo, img };
    const url = "/core/update-user-profile/";
    try {
      const ApiCall = await updateProfileApi(url, data);
      navigate.push("../profile/profile");
    } catch (err) {
      console.log(err);
    }
  };
  const navigate = useRouter();
  const onImageChange = (e:any) => {
    const file = e.target.files[0];
    setImg(file);
  };
  return (
    <div>
      <div className="m-2 p-2 mt-24 text-white">
        <div className="mx-4">
          {/* <Link href="../profile/profile">
            <a> */}

          <label>Enter your Name</label>
          <input
            className="w-full py-3 my-2 mb-4 bg-white text-xl text-black"
            type="text"
            onChange={(e) => {
              setUserinfo(e.target.value);
            }}
          />
          <label>Enter Image</label>
          {/* <input
              className="w-full py-3 my-2 text-xl text-black"
              type="file"
              onChange={onImageChange}
            /> */}
          <br />
          <label htmlFor="profileimg">
            <input
              style={{ display: "none" }}
              id="profileimg"
              name="profileimg"
              onChange={onImageChange}
              type="file"
            />
            <Button
              color="secondary"
              variant="contained"
              component="span"
              className=" my-5"
            >
              Upload Your Profile Image
            </Button>
          </label>
          {/* <input
              onClick={updateProfile}
              value="Submit"
              className="w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center"
            /> */}
          <button

            onClick={updateProfile}
            className="w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center"
          >
            Submit
          </button>
          {/* </a>
            </Link> */}

          {/* </a>
          </Link> */}
        </div>
        <div className="mx-4"></div>
      </div>
    </div>
  );
};
export default Edit;
