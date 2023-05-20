import React from "react";

const NewsLetter = () => {
  return (
    <div className="hero min-h-screen bg-base-300 my-3">
        <img src="https://i.ibb.co/8717QXK/banner1.jpg" className="rounded-lg h-screen" alt=""/>
      <div className="hero-content text-center text-white">
        <div className="w-full">
            <p>Subscribe Now!</p>
          <h1 className="text-2xl md:text-5xl font-bold w-full m-3">
            Stay Up To Date <br /> With Our News Letter
          </h1>
          <input
            name="name"
            type="text"
            placeholder="Your Name here"
            className="input input-bordered w-full mt-3"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email here"
            className="input input-bordered w-full mt-3"
          />
          <button className="btn btn-primary mt-3">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
