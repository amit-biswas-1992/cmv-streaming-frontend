import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "next/link";
import * as React from "react";
import styles from "./Authpage.module.css";
import ForgetAnimation from "./ForgetAnimation";

export default function ForgetPassPage() {
  return (
    <div className={`${styles.authpage} pb-16 px-8`}>
      <ForgetAnimation />
      <p className=" text-sm 2xl:text-lg font-normal py-5">নতুন পাসওয়ার্ড</p>
      <FormControl sx={{ width: "100%" }}>
        <OutlinedInput placeholder="  নতুন পাসওয়ার্ড লিখুন" />
      </FormControl>

      <div className=" pt-12 pb-20">
        <Link href="./login">
          <a>
            <button
              className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-2 px-4 rounded-xl w-full"
              type="button"
            >
              নতুন পাসওয়ার্ড তৈরি করুন
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
