import React from "react";
import { Link } from "react-router-dom";

const ToyCard = (props) => {
  const { Picture, Name, Race, Category, Detail, Rating, _id } = props.featuredToy;

  return (
    <div className="border">
      <div className="card card-side bg-base-100 shadow-xl flex flex-col">
        <figure>
          <img
            className="h-52 object-contain"
            src={Picture}
            alt="toy"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
          <p>{Race}</p>
          <p>{Category}</p>
          <p>{Rating}</p>
          <div className="card-actions justify-between">
            <Link to={`/toydetail/${_id}`}>
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
  );
};

export default ToyCard;
