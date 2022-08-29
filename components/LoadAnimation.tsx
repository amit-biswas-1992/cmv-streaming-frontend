
import React from 'react';
import Lottie from 'react-lottie'

import animationData from "../load.json"
export default function LoadAnimation() {
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
                height={100}
                width={100}
            />
        </div>
    );
}