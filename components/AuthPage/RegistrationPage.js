import WestIcon from "@mui/icons-material/West";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Link from "next/link";
import * as React from "react";
import styles from "./Authpage.module.css";

export default function RegistrationPage() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const [values2, setValues2] = React.useState({
    password: "",
    showPassword2: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values2, [prop]: event.target.value2 });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,

      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values2,

      showPassword2: !values2.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.authpage} pb-16`}>
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
      <form>
        {" "}
        <p
          className=" text-2xl text-center font-medium py-7"
          style={{ color: "#36455A" }}
        >
          অ্যাকাউন্ট তৈরি করুন
        </p>
        <div className=" px-8">
          <p className=" text-sm 2xl:text-lgfont-normal py-5"> নাম</p>
          <FormControl sx={{ width: "100%" }}>
            <OutlinedInput required placeholder="আপনার  নাম লিখুন" />
          </FormControl>

          <p className=" text-sm 2xl:text-lgfont-normal py-5">ই-মেইল</p>
          {/* <input
          type="email"
          className=" border-2 w-full py-5 px-4 mt-5"
          placeholder="Enter your mail"
        /> */}
          <FormControl sx={{ width: "100%" }}>
            <OutlinedInput placeholder="আপনার মেইল লিখুন (ঐচ্ছিক)" />
          </FormControl>

          <div className=" pt-36 pb-20">
            <Link href="/package">
              <a>
                <button
                  className="shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-lg text-white font-semibold py-3 px-4 rounded-xl w-full"
                  type="submit"
                >
                  অ্যাকাউন্ট তৈরি করুন
                </button>
              </a>
            </Link>
          </div>
        </div>{" "}
      </form>
    </div>
  );
}
