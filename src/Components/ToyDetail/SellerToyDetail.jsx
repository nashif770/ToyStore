import React from "react";
import { useLoaderData } from "react-router-dom";

const SellerToyDetail = () => {
  const toyDetail = useLoaderData();
  console.log(toyDetail);
  const { Picture, Name, Race, Category, Detail, Rating, _id } = toyDetail;
  return (
    <div className="card card-side bg-base-100 m-5 flex flex-row">
      <figure className="flex flex-col w-1/2">
        <img className="h-96 object-contain" src={Picture} alt="Movie" />
      </figure>
      <div className="">
        <h2 className="card-title">{Name}</h2>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Race:</span> {Race}
        </p>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Category:</span> {Category}
        </p>
        <p className="m-3 ">
          <span className="font-bold text-1xl">
            Detail:
            <br />
          </span>{" "}
          {Detail}
        </p>
        <button className="btn btn-primary w-1/2">Buy Now</button>
      </div>
    </div>
  );
};

export default SellerToyDetail;
