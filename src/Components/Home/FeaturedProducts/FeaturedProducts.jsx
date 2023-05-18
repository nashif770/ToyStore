import React, { useEffect, useState } from "react";
import ToyCard from "../ToyCard";

const FeaturedProducts = ({props}) => {
  console.log("test",props)
  const [featuredToys, setFeaturedToys] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/featuredtoys/${props}`)
    .then(res=>res.json())
    .then(data=> setFeaturedToys(data)) 
  },[])

//   console.log(toys);

  // const { _id } = toys;

  return (
    <div className="border grid grid-cols-3 gap-3">
      {featuredToys.map((featuredToy) => (
        <ToyCard
        key={featuredToy._id}
        featuredToy={featuredToy}></ToyCard>
      ))}
      {/* {toys.map((toy) => (
        console.log(toy._id)
      ))} */}
    </div>
  );
};

export default FeaturedProducts;
