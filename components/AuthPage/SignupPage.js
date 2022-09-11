import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Authpage.module.css";

const SignupPage = () => {
  const [mobile, setmobile] = useState("");
  const [isError, setIsError] = useState(false);
  const handleChange = (e) => {
    setmobile(e.target.value);
    if (e.target.value.length > 11) {
      setIsError(true);
    } else if (e.target.value.length < 11) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  return (
    <div className={styles.authpage}>
      <Link href="/">
        <a>
          <div className="flex items-center gap-4 px-5 pt-3 ">
            <WestIcon />
            <p className="text-2xl font-medium " style={{ color: "#333333" }}>
              নিবন্ধন করুন
            </p>
          </div>
        </a>
      </Link>

      <section className={`${styles.contents}`}>
        <div>
          {" "}
          <form className="w-full ">
            <div className=" mb-6">
              <div className="">
                <label className="block text-gray-700 md:text-right mb-2 2xl:mb-2 pr-4 text-sm 2xl:text-lg font-medium">
                  মোবাইল নাম্বার <br />
                </label>
              </div>
              <div className="">
                {/* <input
                  placeholder=" আপনার মোবাইল নাম্বার দিন"
                  className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                /> */}

                <FormControl sx={{ width: "100%" }}>
                  <OutlinedInput
                    type="tel"
                    placeholder=" আপনার মোবাইল নাম্বার দিন"
                    error={isError}
                    value={mobile}
                    // defaultValue="+880"
                    onChange={handleChange}
                    required
                  />
                </FormControl>
                {isError === true ? (
                  <p className=" text-xs 2xl:text-sm pt-3 text-red-500">
                    আপনার নম্বর সঠিক নয়, দয়া করে ১১ সংখ্যা লিখুন
                  </p>
                ) : (
                  <p></p>
                )}
                {/* <TextField
                  type="tel"
                  error={isError}
                  value={mobile}
                  onChange={(e) => {
                    setmobile(e.target.value);
                    if (e.target.value.length > 10) {
                      setIsError(true);
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91</InputAdornment>
                    ),
                  }}
                /> */}
              </div>
            </div>

            <div className=" mb-6">
              <label className=" block text-gray-400 font-bold">
                <span className="text-sm  text-center font-normal">
                  ওটিপি পাঠানোর মাধ্যমে আপনি আমাদের সকল নিয়ম মেনে সাইন ইন করছেন
                </span>
              </label>
            </div>

            <div className=" mt-24">
              <Link href="varification">
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
          </form>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
