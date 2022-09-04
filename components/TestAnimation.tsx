import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../verification.json"
export default function TestAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
      
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={160}
                width={160}
            />
        </div>
    );
}