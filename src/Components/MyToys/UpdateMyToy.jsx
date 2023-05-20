import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateMyToy = () => {
  const id = useLoaderData();
  console.log("hello", id)
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row w-full">
        <div className="card w-full shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Update Toy</h1>
          <form className="card-body">
            <div className="flex flex-row">
              <div className="form-control w-full m-3">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered"
                />
              </div>
              {/* -------------------- */}
              <div className="form-control w-full m-3">
                <label className="label">
                  <span className="label-text">Toy Name</span>
                </label>
                <input
                  name="Name"
                  type="text"
                  placeholder="Toy Name"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  name="category"
                  type="text"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  <span className="label-text">Available quantity</span>
                </label>
                <input
                  name="quantity"
                  type="text"
                  placeholder="Available quantity"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <label className="label">
              <span className="label-text">Toy Detail</span>
            </label>
            <textarea
              name="detail"
              id=""
              cols="30"
              rows="10"
              className="p-3 input input-bordered "
              placeholder="Toy Detail"
            ></textarea>
            <div className="form-control mt-6 flex justify-center">
              <button className="btn btn-primary w-1/2 m-auto">Add Toy</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyToy;
