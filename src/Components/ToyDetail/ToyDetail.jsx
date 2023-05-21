import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetail = () => {
  const toyDetail = useLoaderData();
  console.log("cons",toyDetail);
  const { Picture, Name, Race, Category, Detail, Rating, _id } = toyDetail;
  // picture, toy name, seller name, seller email, price, rating, available quantity, and detail description
  return (
    <div className="card card-side bg-base-100 m-5 flex flex-row">
      <figure className="flex flex-col w-1/2">
        <img className="h-96 object-contain" src={Picture} alt="Movie" />
      </figure>
      <div className="">
        <h2 className="card-title">{Name}</h2>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Race:</span> {Race || "TBA"}
        </p>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Category:</span> {Category || "TBA"}
        </p>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Seller Name:</span> {Category || "TBA"}
        </p>
        <p className="m-3 ">
          <span className="font-bold text-1xl">Seller Email:</span> {Category || "TBA"}
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

export default ToyDetail;
