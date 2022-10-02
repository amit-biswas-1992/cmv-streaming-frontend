import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';

import { toast } from "react-toastify";

import { createUserProfile } from './../../services/api.service';
const Register = () => {
  const navigate = useRouter();
  const [userName, setUserName] = useState('');
  console.log(userName);

  const [userNum, setUserNum] = useState("");
  console.log(userNum);

  useEffect(() => {
    const loginData = JSON.parse(localStorage.getItem('otp_response'));
    // console.log(loginData.notification_text,"loginData");
    setUserNum(loginData);

  }, []);
  const handleValueChange = event => {

    setUserName(event.target.value)
  };

  const createProfile = async () => {
    // if (email.current.value == "" || password.current.value == "") {
    //   toast.info("Please fill the information");
    //   return;
    // }
    const datakey = { userNum, userName };
    console.log(datakey, "datakey");

    const url = "/core/create-customer-profile";
    try {
      const data = await createUserProfile(url, datakey);
      console.log("dataforotp", data);
      // const response = await custom_axios.post(ApiConstants.CREATE_PROFILE, {
      //   phone: userNum,
      //   name: userName,


      // });
      // console.log(data,"responseinfo");
      localStorage.setItem("user_token", data.token);
      localStorage.setItem("user_info", JSON.stringify(data.user));
      localStorage.setItem("customer_info", JSON.stringify(data.customer));
      navigate.push("../home");
      toast.success("Login Successfull");
    } catch (error: any) {
      toast.warning("Please Input Your Name")
      // if (error.status == 401) toast.warn(error.data.message);
    }

    // navigate("/");
  };

  return (
    <div className='bg-slate-900 grid place-items-center font-body'>
      <div className='m-2 p-2 mt-8 text-white'>
        <div className='mx-4'>
          <form action="/send-data-here" method="post">
            <label>Enter your Name</label>
            <input autoFocus className='w-full py-3 px-3 my-2 bg-white text-xl text-black' type="text" id="text" name="text"
              placeholder='Please Input your name '
              required
              onChange={handleValueChange}
            />


          </form>
        </div>
        <div className='mx-4'>
          {/* <Link href='../home'>  </Link> */}
          <button onClick={createProfile} type="submit" className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>

        </div>

      </div>

    </div>
  )
}

export default Register
