import { Input } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import custom_axios from "../../axios/AxioSetup";
import { ApiConstants } from "../../services/api.service";
const Register = () => {
  const navigate = useRouter();
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);
  // let number: any = useRef();
  // console.log(number);

  const handleNumChange = (e) => {
    // event.preventDefault()

    setNum(e.target.value);
    if (e.target.value.length > 11) {
      setIsError(true);
    } else if (e.target.value.length < 11) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const loginApp = async () => {
    // if (email.current.value == "" || password.current.value == "") {
    //   toast.info("Please fill the information");
    //   return;
    // }
    try {
      const response = await custom_axios.post(ApiConstants.LOGIN, {
        sender: "8809612558888",
        receiver: num,
        notification_type: "otp",
        send_by: "sms",
      });
      console.log(response, "response");
      localStorage.setItem("login_response", JSON.stringify(response.data));

      navigate.push("../auth/verification");
    } catch (error: any) {
      toast.warning("Please Input a correct Number");
      // if (error.response.status == 401) toast.warn(error.response.data.message);
    }

    // navigate("/");
  };

  return (
    <div className="bg-slate-900 h-screen grid place-items-center font-body">
      <div className="m-2 p-2 text-white">
        <div>
          <h1>Enter your Mobile Number</h1>

          <Input
            className="w-full py-3 px-3 my-2 bg-white text-xl"
            type="tel"
            id="num"
            name="num"
            error={isError}
            value={num}
            // ref={number}
            onChange={handleNumChange}
            placeholder="Please Enter a Valid Number "
          />
          {isError === true ? (
            <p className=" text-xs 2xl:text-sm pt-3 text-red-500">
              Your number is not correct, please enter 11 numbers
            </p>
          ) : (
            <p></p>
          )}

          {/* <div>
              <p className='mt-6 w-full py-4'>By continuing, you agree to our terms and conditions</p>
            
              <button onClick={loginApp} className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
    
            </div> */}
          <div className=" mb-6">
            <label className=" block text-gray-400 font-bold">
              <span className="text-sm  text-center font-normal">
                By continuing, you agree to our terms and conditions
              </span>
            </label>
          </div>

          <div className=" mt-16">
            {isError === true ? (
              <button
                disabled
                className="shadow  bg-gray-300  focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                type="button"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={loginApp}
                className="shadow  bg-cyan-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-4 px-4 rounded-md w-full"
                type="button"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
