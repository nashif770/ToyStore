import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "../ToyCard";

const FeaturedProducts = () => {
  const toys = useLoaderData();

//   console.log(toys);

  const { _id } = toys;

  return (
    <div className="border grid grid-cols-3 gap-3">
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
