import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import UserList from "./components/UsersList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import ViewUser from "./components/ViewUser";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/view/:id" element={<ViewUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
