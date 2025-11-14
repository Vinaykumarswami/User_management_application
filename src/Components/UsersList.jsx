import React, { useEffect, useState } from "react";
import { API } from "../api/api";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
  try {
    const response = await API.get("/users");
    setUsers(response.data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

useEffect(() => {
  fetchUsers();
}, []);


  const deleteUser = async (id) => {
    try {
      await API.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch {
      alert("Failed to delete");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 shadow mt-6 rounded">
      <h1 className="text-2xl font-bold mb-4">All Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="border-b py-4 flex justify-between items-center"
        >
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>

          <div className="flex gap-3">
            <Link
              to={`/view/${user.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              View
            </Link>

            <Link
              to={`/edit/${user.id}`}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Edit
            </Link>

            <button
              onClick={() => deleteUser(user.id)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
