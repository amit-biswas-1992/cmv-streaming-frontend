import Link from "next/link";
import { useEffect, useState } from "react";
import { callApiPostWithoutToken } from "../../services/api.service";
export const getStaticProps = async () => {
  const data = await callApiPostWithoutToken(`/core/update-user-profile/`);

  return {
    props: {
      data,
    },
  };
};

const UpdateProfile = async (event: any) => {
  console.log(event.target.dataset);
};
const Edit = () => {
  const [customerinfo, setCustomerinfo] = useState("");
  console.log(customerinfo, "info paisi");
  useEffect(() => {
    const CustomerData = JSON.parse(localStorage.getItem("customer_info"));
    // console.log(loginData.notification_text,"loginData");
    setCustomerinfo(CustomerData);
  }, []);
  return (
    <div>
      <div className="m-2 p-2 mt-24 text-white">
        <div className="mx-4">
          <form method="patch">
            <label>Enter your Name</label>
            <input
              className="w-full py-3 my-2 mb-4 bg-white text-xl text-black"
              type="text"
              id="text"
              name="text"
            />
            <label>Enter Image</label>
            <input
              className="w-full py-3 my-2 text-xl text-black"
              type="file"
              id="file-input"
              name="ImageStyle"
            />
          </form>
        </div>
        <div className="mx-4">
          <Link href="../profile/profile">
            <button
              onClick="updateProfile()"
              type="submit"
              className="w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;
