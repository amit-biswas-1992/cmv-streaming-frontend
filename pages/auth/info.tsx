import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'react-phone-number-input/style.css';

import { toast } from "react-toastify";
import custom_axios from '../../axios/AxioSetup';
import { ApiConstants } from '../../services/api.service';
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
    try {
      const response = await custom_axios.post(ApiConstants.CREATE_PROFILE, {
        phone: userNum,
        name:userName,
      
    
      });
      // console.log(response.data,"responseinfo");
      localStorage.setItem("user_token", JSON.stringify(response.data.token));
      localStorage.setItem("user_info", JSON.stringify(response.data.user));
      localStorage.setItem("customer_info", JSON.stringify(response.data.customer));
      navigate.push("../home");
      toast.success("Login Successfull");
    } catch (error: any) {
      toast.error("An error ocured")
      // if (error.response.status == 401) toast.warn(error.response.data.message);
    }

    // navigate("/");
  };

  return (
    <div className='bg-slate-900 grid place-items-center font-body'>
      <div className='m-2 p-2 mt-8 text-white'>
      <div className='mx-4'>
      <form action="/send-data-here" method="post">
            <label>Enter your Name</label>
            <input className='w-full py-3 px-3 my-2 bg-white text-xl text-black' type="text" id="text" name="text"
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
