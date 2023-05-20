import React, { useContext, useEffect, useState } from "react";
import MyToysCard from "./MyToysCard";
import { AuthContext } from "../../Providers/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [sellerToys, setSellerToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/sellertoys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSellerToys(data));
  }, []);

  const handleDelete = (id) => {
    const prompt = confirm("Do you really want to delete this item?");
    if (prompt) {
      fetch(`http://localhost:5000/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Successfully Deleted");
            const remaining = sellerToys.filter(sellerToy => sellerToy._id !== id)
            setSellerToys(remaining);
          }
        });
    }
  };

  const handleUpdate = id =>{
    console.log(id)
    fetch(`http://localhost:5000/updatetoy/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(id)
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
    })
  }

  // const { Picture, Name, Race, Category, Detail, Rating, _id } = allToys;

  return (
    <div className="justify-start m-3">
      {sellerToys.map((sellerToy) => (
        <MyToysCard
          key={sellerToy._id}
          sellerToy={sellerToy}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        ></MyToysCard>
      ))}
    </div>
  );
};

export default MyToys;
