import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ToyCard = (props) => {
  const {user} = useContext(AuthContext)

  const { Picture, Name, Race, Category, Detail, Rating, _id } = props.featuredToy;

  const loginPrompt =()=>{
    alert("Please Login First")
  }
  return (
    <div className="hover:bg-slate-600">
      <div className="card card-side bg-base-100 shadow-xl flex flex-col w-3/4 m-auto">
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
            {user?<Link to={`/toydetail/${_id}`}>
              <button className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                View Details
              </button>
            </Link>:
            <Link to={`/toydetail/${_id}`}>
              <button onClick={loginPrompt} className="ms-4 btn btn-primary border-none bg-gray-500 hover:bg-green-400">
                View Details
              </button>
            </Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
