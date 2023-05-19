import React, { useContext, useEffect, useState } from "react";
import MyToysCard from "./MyToysCard";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/mytoys/${user.email}`
    console.log(user.email, url)
  const [sellerToys, setSellerToys] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:5000/mytoys/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setSellerToys(data));
  }, []);

  // const { Picture, Name, Race, Category, Detail, Rating, _id } = allToys;

  console.log(sellerToys);

  return (
    <div className="justify-start m-3">
      {sellerToys.map((sellerToy) => (
        <MyToysCard key={sellerToy._id} sellerToy={sellerToy}></MyToysCard>
      ))}
    </div>
  );
};

export default MyToys;
