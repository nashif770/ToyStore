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
      fetch(`http://localhost:5000/sellertoys/${id}`, {
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
    fetch(`http://localhost:5000/sellertoys/${id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res=> res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0){
            const remaining = sellerToys.filter(sellerToy => sellerToy._id !== id);
            const updated = sellerToys.find(sellerToy => sellerToy._id === id);
            updated.status= 'confirm'
            const newSellerToy = [updated, ...remaining];
            setSellerToys(newSellerToy)
        }
    })
  }

  // const { Picture, Name, Race, Category, Detail, Rating, _id } = allToys;

  console.log(sellerToys);

  return (
    <div className="justify-start m-3">
      {sellerToys.map((sellerToy) => (
        console.log(sellerToy.length)
      ))}
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
