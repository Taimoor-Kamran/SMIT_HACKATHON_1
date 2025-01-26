import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen">
      {/* Navbar */}
      <div className="bg-green-500 p-4 rounded">
        <div className="flex items-center justify-between">
          <h1 className="text-white text-2xl font-semibold">Saylani</h1>
          <div className="flex items-center space-x-6">
            <Link to="/signup" className="text-white hover:text-gray-300">
              Register user
            </Link>
            <Link to="/department-manger" className="text-white hover:text-gray-300">
              Department Manager
            </Link>
            <Link to="/adminpanel" className="text-white hover:text-gray-300">
              Admin Panel
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full h-[calc(100vh-64px)] bg-cover bg-center" style={{ backgroundImage: 'url(https://via.placeholder.com/1500)' }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Saylani
            </h2>
            <p className="text-lg mb-6">
              Transforming lives with the power of technology and community support.
            </p>
            <Link
              to="/signup"
              className="inline-block bg-green-600 text-white text-lg py-3 px-8 rounded-full hover:bg-green-700 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
