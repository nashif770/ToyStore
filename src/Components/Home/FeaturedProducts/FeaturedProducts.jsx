import React, { useEffect, useState } from "react";
import ToyCard from "../ToyCard";

const FeaturedProducts = ({props}) => {
  const [featuredToys, setFeaturedToys] = useState([])
  useEffect(()=>{
    fetch(`http://localhost:5000/featuredtoys/${props}`)
    .then(res=>res.json())
    .then(data=> setFeaturedToys(data)) 
  },[])

  return (
    <div className="border grid grid-cols-1 md:grid-cols-3 gap-3">
      {featuredToys.map((featuredToy) => (
        <ToyCard
        key={featuredToy._id}
        featuredToy={featuredToy}></ToyCard>
      ))}
    </div>
  );
};

export default FeaturedProducts;
