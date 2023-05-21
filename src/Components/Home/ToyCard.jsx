import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ToyCard = (props) => {
  const { user } = useContext(AuthContext);

  const { Picture, Name, Race, Category, Detail, Rating, _id } =
    props.featuredToy;

  const loginPrompt = () => {
    alert("Please Login First");
  };
  return (
      <div className="card card-side bg-base-100 shadow-xl flex flex-col w-full m-auto">
        <figure>
          <img className="h-52 object-contain" src={Picture} alt="toy" />
        </figure>
        <div className="card-body h-80">
          <h2 className="card-title"><span>Name:</span>{Name}</h2>
          <p><span className="font-bold">Race:</span> {Race}</p>
          <p><span className="font-bold">Category:</span> {Category}</p>
          <p><span className="font-bold">Rating:</span> {Rating}</p>
          <div>
            
          </div>
          <div className="card-actions justify-center">
            {user ? (
              <Link to={`/toydetail/${_id}`}>
                <button className="btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                  View Details
                </button>
              </Link>
            ) : (
              <Link to={`/toydetail/${_id}`}>
                <button
                  onClick={loginPrompt}
                  className="btn btn-primary border-none bg-gray-500 hover:bg-green-400"
                >
                  View Details
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
  );
};

export default ToyCard;
