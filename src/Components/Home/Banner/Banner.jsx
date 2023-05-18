import React from "react";
import photo from "../../../assets/images/banner2.jpg";

const Banner = () => {
  return (
    <div className="border mx-1 relative">
      <img src={photo} className="w-screen" alt="" />
      <h1 className="text-5xl text-white font-bold w-2/3 absolute top-40 left-5">
        Warhammer 40k: <br />
        Unleash Your Battle Fantasy with the Finest Toy Collection!
      </h1>
    </div>
  );
};

export default Banner;
