import React from "react";
import { Link } from "react-router-dom";

const MyToysCard = ({ sellerToy, handleDelete, handleUpdate }) => {
  const {
    sellerName,
    _id,
    sellerEmail,
    Picture,
    Price,
    Rating,
    Name,
    Category,
    Quantity,
    Detail,
  } = sellerToy;

  console.log(_id)
  // console.log(sellerToy);

  return (
    <div className="hero min-h-screen bg-base-200 w-full border m-3">
      <div className="hero-content flex-row">
        <img src={Picture} className="h-80 max-w-sm rounded-lg shadow-2xl" />
        <div className="w-96">
          <h1 className="text-3xl font-bold">{Name}</h1>
          <p>
            <span className="font-bold mx-3">Category:</span>
            {Category || "TBA"}
          </p>
          <p>
            <span className="font-bold mx-3">Price:</span> ${Price || "TBA"}
          </p>
          <p>
            <span className="font-bold mx-3">Rating:</span> {Rating || "TBA"}
          </p>
          <p>
            <span className="font-bold mx-3">Quantity:</span>
            {Quantity || "TBA"}
          </p>
          <p>
            <span className="font-bold mx-3">Seller Name:</span>
            {sellerName || "40k Action Figure Store"}
          </p>
          <p>
            <span className="font-bold mx-3">Seller Email:</span>
            {sellerEmail || "www.wh40k@gmail.com"}
          </p>
        </div>

        <p className="mt-0 w-1/2">
          <span className="font-bold mx-3">Detail:</span>
          {Detail || "TBA"}
        </p>
        <div className="flex flex-col">
          <Link to={`/toydetail/${_id}`}>
            <button className="btn border-none bg-green-500 my-2 w-full">Details</button>
          </Link>
          <Link to={`/updateMyToy/${_id}`}>
            <button
              // onClick={() => handleUpdate(_id)}
              className="btn border-none bg-yellow-500 my-2 w-full"
            >
              Edit
            </button>
          </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn border-none bg-red-500 my-2 w-full"
            >
              Delete
            </button>
        </div>
      </div>
    </div>
  );
};

export default MyToysCard;
