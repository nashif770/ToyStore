import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Outlet } from "react-router-dom";
import Banner from "./Banner/Banner";
import Gallery from "./Gallery/Gallery";
import ReactTab from "./ReactTab/ReactTab";
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  const user = useContext(AuthContext);

  return (
    <div className="bg-gray-200">
      <h2 className="text-3xl font-bold text-center p-4">
      IN THE GRIM DARKNESS OF THE FAR FUTURE,<br/> <span className="text-red-600">THERE IS ONLY WAR</span>
      </h2>
      <Banner></Banner>
      <Outlet></Outlet>
      <h2 className="text-3xl font-bold text-center m-4">Checkout Our Store</h2>
      <ReactTab></ReactTab>
      <h2 className="text-3xl font-bold text-center m-4">See Our Gallery</h2>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
