import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ToyCard from "../Home/ToyCard";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const sellerToys = useLoaderData();

  // const { Picture, Name, Race, Category, Detail, Rating, _id } = sellerToys;
  const loginPrompt=()=>{
    alert("You will have to Login First")
  }

  console.log(sellerToys);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 bg-base-300 gap-3 p-3">
      {sellerToys.map((toys) => (
        <>
          <div className="border-rounded">
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
              <figure>
                <img
                  className="h-52 object-contain"
                  src={toys.Picture}
                  alt="toy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{toys.Name}</h2>
                <p>{toys.Race}</p>
                <p>{toys.Category}</p>
                <p>{toys.Rating}</p>
                <div className="card-actions justify-between">
                  {user ? (
                    <Link to={`/toydetail/${toys._id}`}>
                      <button className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <Link to={`/toydetail/${toys._id}`}>
                      <button onClick={loginPrompt} className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                        View Details
                      </button>
                    </Link>
                  )}
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
