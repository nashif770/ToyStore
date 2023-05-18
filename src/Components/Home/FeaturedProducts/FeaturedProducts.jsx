import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../../Shared/ToyCard/ToyCard";

const FeaturedProducts = () => {
  const toys = useLoaderData();

//   console.log(toys);

  const { _id } = toys;

  return (
    <div className="border">
      {toys.map((toy) => (
        <ToyCard
        key={toy._id}
        toy={toy}></ToyCard>
      ))}
      {/* {toys.map((toy) => (
        console.log(toy._id)
      ))} */}
    </div>
  );
};

export default FeaturedProducts;
