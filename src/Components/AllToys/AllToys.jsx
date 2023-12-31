import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ToyCard from "../Home/ToyCard";
import { AuthContext } from "../../Providers/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  // const [sellerToys, setSellerToys] = useState([]);

  const sellerToys = useLoaderData();

  const searchToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const toyName = form.toyName.value;
    console.log(toyName);
  };

  const loginPrompt = () => {
    alert("You will have to Login First");
  };

  return (
    <>
      <div className="overflow-x-auto mt-3">
        <form onSubmit={searchToy}>
          <input
            name="toyName"
            type="text"
            placeholder="Type Toy Name Here"
            className="input input-bordered ms-16 me-3"
            required
          />
          <button className="btn btn-primary border-none bg-gray-500 hover:bg-green-400 my-3">
            Search
          </button>
        </form>
        <table className="table w-11/12 m-auto">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th>Toy</th>
              <th>seller Name</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {sellerToys.map((toys) => (
              <>
                <tr key={toys._id} className="text-center">
                  <th><img src={toys.Picture || "TBA"} className="h-10" alt=""/></th>
                  <th className="text-start">{toys.sellerName || "WH40k Toys Store"}</th>
                  <td>{toys.Name}</td>
                  <td>{toys.Price}</td>
                  <td>{toys.Quantity || "On Demand"}</td>
                  <td>{toys.Rating}</td>
                  <td>
                    {user ? (
                      <Link to={`/toydetail/${toys._id}`}>
                        <button className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                          View Details
                        </button>
                      </Link>
                    ) : (
                      <Link to={`/toydetail/${toys._id}`}>
                        <button
                          onClick={loginPrompt}
                          className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400 w-full"
                        >
                          View Details
                        </button>
                      </Link>
                    )}
                  </td>
                </tr>
              </>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;

{
  /* <div className="border-rounded">
            <div className="card card-side bg-base-100 shadow-xl flex flex-col">
              <figure>
                <img
                  className="h-52 object-contain"
                  src={toys.Picture}
                  alt="toy"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {toys.Name}</h2>
                <p>Race: {toys.Race}</p>
                <p>Category: {toys.Category}</p>
                <p>Rating: {toys.Rating}</p>
                <div className="card-actions justify-between">
                  {user ? (
                    <Link to={`/toydetail/${toys._id}`}>
                      <button className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                        View Details
                      </button>
                    </Link>
                  ) : (
                    <Link to={`/toydetail/${toys._id}`}>
                      <button
                        onClick={loginPrompt}
                        className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400 w-full"
                      >
                        View Details
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div> */
}
