import React, { useEffect, useState } from "react";
import { API } from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const fetchUser = async () => {
    const res = await API.get(`/users/${id}`);
    setForm(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    await API.put(`/users/${id}`, form);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-6 shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>

      <form onSubmit={updateUser} className="flex flex-col gap-3">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-3 rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border p-3 rounded"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="border p-3 rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
