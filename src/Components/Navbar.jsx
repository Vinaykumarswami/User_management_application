import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">User Management</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/add" className="hover:text-gray-300">Add User</Link>
      </div>
    </nav>
  );
};

export default Navbar;
