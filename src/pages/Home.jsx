import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg">This is the home page of the React App Router.</p>
      <Navbar />
    </div>
  );
};

export default Home;
