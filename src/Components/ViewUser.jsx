import React, { useEffect, useState } from "react";
import { API } from "../api/api";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await API.get(`/users/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white p-6 mt-6 shadow rounded">
      {user && (
        <>
          <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
          <p className="text-gray-700">{user.email}</p>
          <p className="text-gray-500">{user.phone}</p>
        </>
      )}
    </div>
  );
};

export default ViewUser;
