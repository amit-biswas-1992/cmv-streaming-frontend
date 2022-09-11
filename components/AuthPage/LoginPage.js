import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Authpage.module.css";

export default function LoginPage() {
  // const [values, setValues] = React.useState({
  //   password: "",
  //   showPassword: false,
  // });

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,

  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };
  const [mobile, setmobile] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <div className={`${styles.authpage} pb-16`}>
      {/* <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 ">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              Sign In
            </p>
          </div>
        </a>
      </Link> */}
      <p
        className=" text-3xl text-center font-medium py-7"
        style={{ color: "#36455A" }}
      >
        প্রবেশ করুন
      </p>
      <div className=" px-8">
        <p className=" text-sm 2xl:text-lg font-normal py-5">
          আপনার মোবাইল নাম্বার দিন
        </p>
        {/* <input
          type="email"
          className=" border-2 w-full py-5 px-4 mt-5"
          placeholder="Enter your mail"
        /> */}
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            type="tel"
            placeholder=" আপনার মোবাইল নাম্বার দিন"
            error={isError}
            value={mobile}
            required
            onChange={(e) => {
              setmobile(e.target.value);
              if (e.target.value.length > 11) {
                setIsError(true);
              } else if (e.target.value.length < 11) {
                setIsError(true);
              } else {
                setIsError(false);
              }
            }}
          />
        </FormControl>
        {isError === true ? (
          <p className=" text-xs 2xl:text-sm pt-3 text-red-500">
            আপনার নম্বর সঠিক নয়, দয়া করে ১১ সংখ্যা লিখুন
          </p>
        ) : (
          <p></p>
        )}
        {/* <p className=" text-sm 2xl:text-lg font-normal py-5">
          আপনার পাসওয়ার্ড লিখুন
        </p>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            placeholder="পাসওয়ার্ড"
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl> */}
        <div className=" flex justify-between items-center pt-8">
          <div className=" flex gap-2">
            <Checkbox defaultChecked={false} />
            <p className=" tetx-xs font-normal" style={{ color: " #ABB3BB" }}>
              মনে রাখুন
            </p>
          </div>
          <Link href="forgetpass">
            <a>
              <p className=" tetx-xs font-normal" style={{ color: "#2945FF" }}>
                পাসওয়ার্ড মনে নেই?
              </p>
            </a>
          </Link>
        </div>
        <div className=" mt-28">
          <Link href="varificationlogin">
            <a>
              {isError === true ? (
                <button
                  disabled
                  className="shadow  bg-gray-300  focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                  type="button"
                >
                  ওটিপি পাঠান
                </button>
              ) : (
                <button
                  className="shadow  bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
                  type="button"
                >
                  ওটিপি পাঠান
                </button>
              )}
            </a>
          </Link>
        </div>
        <div className="text-center pt-16 pb-10 flex justify-center items-center">
          <p className=" text-xs 2xl:text-base font-normal ">
            অ্যাকাউন্ট নেই?{" "}
          </p>
          <Link href="./signup">
            <a>
              <span className=" font-semibold text-blue-700 text-sm 2xl:text-lg cursor-pointer">
                সাইন আপ
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
