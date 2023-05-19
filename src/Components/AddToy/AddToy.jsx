import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
    const {user} = useContext(AuthContext)

    const {displayName, email} = user;

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const Picture = form.photo.value;
    const Price = form.price.value;
    const Rating = form.rating.value;
    const Name = form.Name.value;
    const Category = form.category.value;
    const Quantity = form.quantity.value;
    const Detail = form.detail.value;

    const toyToAdd ={
        SellerName: displayName,
        sellerEmail: email,
        Picture,
        Price,
        Rating,
        Name,
        Category,
        Quantity,
        Detail
    }
    console.log(toyToAdd)

    fetch('http://localhost:5000/sellertoys',{
        method: "POST",
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(toyToAdd)

    })
    .then(res =>res.json())
    .then(data=> {
        console.log(data)
    })
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/3">
          <h1 className="text-5xl font-bold">Add A Toy</h1>
          <p className="py-6">
            If you have any products you'd like to sell, we invite you to
            participate. you can sell any Painted, re-painted, unpainted or even
            3d printed figurines of Warhammer 40k.
          </p>
        </div>
        <div className="card w-full shadow-2xl bg-base-100">
          <form onSubmit={handleAddToy} className="card-body">
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

export default AddToy;
