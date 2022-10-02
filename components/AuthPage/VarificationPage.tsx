import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";

import {  varifyotp } from "../../services/api.service";

import styles from "./Authpage.module.css";
import Timer from "./Timer";
// import CustomTimer from "./CustomTimer";

import VarificationAnimation from "./VarificationAnimation";
import { generateotp } from './../../services/api.service';
function VarificationPage(props) {
  const navigate = useRouter();
  const [otp, setOtp] = useState("");
  const [loginData, setLoginData] = useState("");
  const [otpData, setOtpData] = useState("");
  console.log(otpData, "otpData");
  console.log(otp, "otp");
  const [timeOut, setTimeOut] = useState(false);

  useEffect(() => {
    const login_Data = JSON.parse(localStorage.getItem("login_response"));

    setLoginData(login_Data.receiver);
    setOtpData(login_Data.notification_text);
  }, [otpData]);

  const handleChange = (otp) => {
    setOtp(otp);
  };

  const handleOTP = async () => {
    if (otp == "") {
      toast.info("Please fill the otp");
      return;
    }
    const datakey = { loginData, otp };
    const url = "/notification/verify-otp";
    try {
      if (otp.length === 4) {
        console.log("matched");
        // const response = await custom_axios.post(ApiConstants.VARIFY_OTP, {
        //   sender: "8809612558888",
        //   receiver: loginData,
        //   notification_text: otp,
        //   notification_type: "otp",
        // });
        const data = await varifyotp(url, datakey);
        console.log("dataforotp", data);
        console.log(data, "response varify");

        if (data.profileScreen === true) {
          // console.log(data.otpData.receiver);
          localStorage.setItem(
            "otp_response",
            JSON.stringify(data.otpData.receiver)
          );
          navigate.push("../auth/info");
          toast.success("OTP varified");
        } else {
          console.log(data.token);

          localStorage.setItem("user_token", data.token);
          localStorage.setItem("user_info", JSON.stringify(data.user));
          localStorage.setItem(
            "customer_info",
            JSON.stringify(data.customer)
          );
          navigate.push("../home");
          toast.success("OTP verified");
        }
        // console.log(data.profileScreen,"response");
        // localStorage.setItem("otp_response", JSON.stringify(data));
        // navigate.push("../auth/info");
      } else {
        toast.warning("Invalid OTP");
      }
    } catch (error: any) {
      toast.warning("Invalid OTP");

      // toast.info(error);
      // if (error.status == 401) toast.warn(error.data.message);
    }

    // navigate("/");
  };
  const resendotp = async () => {
    // if (email.current.value == "" || password.current.value == "") {
    //   toast.info("Please fill the information");
    //   return;
    // }
    const datakey = { loginData };
    const url = "/notification/generate-otp";
    try {
      const data = await generateotp(url, datakey);
      console.log("dataforotp", data);
      // const response = await custom_axios.post(ApiConstants.LOGIN, {
      //   sender: "8809612558888",
      //   receiver: loginData,
      //   notification_type: "otp",
      //   send_by: "sms",
      // });
      // console.log(response,"response");
      localStorage.setItem("login_response", JSON.stringify(data));
      const login_Data = JSON.parse(localStorage.getItem("login_response"));

      setLoginData(login_Data.receiver);
      setOtpData(login_Data.notification_text);
      setOtp("");
      setTimeOut(false);
    } catch (error: any) {
      // if (error.status == 401) toast.warn(error.data.message);
    }

    // navigate("/");
  };
  return (
    <div className={styles.authpage}>
      <section className={`${styles.contents}`}>
        <div className={`${styles.otpimg}   mb-5`}>
          {/* <Image className=" w-full" src={varificationimg} alt="" /> */}
          <VarificationAnimation />
        </div>{" "}
        <div className=" text-center">
          <p className="block text-gray-900  mb-3 2xl:mb-4 pr-4 text-2xl 2xl:text-3xl font-bold">
            Verification
          </p>
          <p className="text-sm 2xl:text-xl font-normal text-gray-500 mb-6 ">
            Enter 4 digit number that sent <br /> to The email on your device
          </p>
        </div>
        <div
          className=" text-center bg-white rounded-xl px-5 py-8 flex flex-col justify-center items-center"
          style={{ boxShadow: " 0px 14px 48px #F0F2FA" }}
        >
          <OtpInput
            shouldAutoFocus
            value={otp}
            onChange={handleChange}
            numInputs={4}
            className="px-3 sm:px-4  2xl:px-5 py-3 2xl:py-4 mx-2 sm:mx-3 2xl:mx-3 text-xl rounded-lg border-2"
          // placeholder="-"
          />
          <div
            style={{
              width: "100%",
            }}
          >
            <button
              onClick={handleOTP}
              className=" shadow mt-8 bg-cyan-400 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-4 px-4 rounded-md w-full"
              type="button"
            >
              Continue
            </button>
          </div>
        </div>
        <div>
          {!timeOut ? (
            <div
              className="font-normal text-sm 2xl:text-lg text-center mt-8 flex justify-center items-center"
              style={{ color: "#F1775C" }}
            >
              {" "}
              <p className=" ">Re-send code in : </p>
              {/* <Timer timevalue={3} setTimeOut={setTimeOut} /> */}
              <Timer setTimeOut={setTimeOut} />
            </div>
          ) : (
            <div>
              <p
                onClick={resendotp}
                className=" text-blue-800 cursor-pointer font-normal text-sm 2xl:text-lg text-center mt-8 flex justify-center items-center"
              >
                Re-send code again
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default VarificationPage;
