import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ToyCard from "../Home/ToyCard";

const AllToys = () => {
  const allToys = useLoaderData();

  const { Picture, Name, Race, Category, Detail, Rating, _id } = allToys;

  console.log(allToys);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-3">
      {allToys.map((toys) => (
        <>
          <div className="border-rounded gap">
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
              <figure>
                <img
                  src="/images/stock/photo-1635805737707-575885ab0820.jpg"
                  alt="toy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toys.Name}</h2>
                <p>{toys.Race}</p>
                <p>{toys.Category}</p>
                <p>{toys.Rating}</p>
                <div className="card-actions justify-between">
                  <Link to={`/toydetail/${toys._id}`}>
                    <button className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                      View Details
                    </button>
                  </Link>
                  <button className="me-4 btn btn-primary border-none bg-red-500 hover:bg-green-400">
                    Collect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default AllToys;
