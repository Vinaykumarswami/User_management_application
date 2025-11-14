import React, { useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addUser = async (e) => {
    e.preventDefault();
    try {
      await API.post("/users", form);
      navigate("/");
    } catch {
      alert("Failed to add user");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Add User</h1>

      <form onSubmit={addUser} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className="border p-3 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
