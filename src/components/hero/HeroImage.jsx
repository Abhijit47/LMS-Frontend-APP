import React from "react";
import Image from "../../assets/images/Hero-image-high-compress.webp";

const HeroImage = () => {
  return (
    <img
      src={Image}
      alt="hero_image"
      className="h-full w-full lg:rounded-br-[100px] lg:rounded-tl-[100px] lg:shadow-lg"
      loading="lazy"
    />
  );
};

export default HeroImage;
