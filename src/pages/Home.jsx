import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg">This is the home page of the React App Router.</p>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Home;
