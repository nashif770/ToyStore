import React from "react";
// import photo from "https://i.ibb.co/48063Vn/banner2.jpg";

const Banner = () => {
  return (
    <div className="border m-1 flex flex-col-reverse lg:flex-row">
      <img src='https://i.ibb.co/48063Vn/banner2.jpg' className="w-screen" alt="" />
      <h1 className="text-5xl text-black font-bold w-2/3 m-auto p-5">
        Warhammer 40k: <br />
        <span className="text-red-600">Unleash</span> Your Battle Fantasy with the Finest Toy Collection!
      </h1>
    </div>
  );
};

export default Banner;
