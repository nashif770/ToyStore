import React from "react";
import { Link } from "react-router-dom";

const Err = () => {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-6xl text-center">404: Webpage does not exist</h1>
      </div>
        <Link to='/'>
          <button className="btn rounded-none border-none bg-green-600 my-4 w-full">
            Go back Home
          </button>
        </Link>
      <img
        className="h-full m-auto"
        src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?w=845&ssl=1"
        alt=""
      />
    </div>
  );
};

export default Err;
