import React, { Component, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "./loading/loading";

interface DisplayLottieProps {
  animationData: any; // Adjust the type according to the type of animationData
}

export default class DisplayLottie extends Component<DisplayLottieProps> {
  render() {
    const { animationData } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
