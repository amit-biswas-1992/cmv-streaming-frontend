import React from "react";
import Lottie from "react-lottie";
import animationData from "../../forgot-password.json";
export default function ForgetAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={190} />
    </div>
  );
}
