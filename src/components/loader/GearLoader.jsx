import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import GearLottie from "../../assets/lottie/gear-loader.json";

const GearLoader = () => {
  return (
    <Player
      autoplay
      loop
      src={GearLottie}
      style={{ height: "150px", width: "150px" }}
    ></Player>
  );
};

export default GearLoader;
