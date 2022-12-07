import React from "react";
import Navbar from "../Components/Navbar";
import Chats from "./Chats";
import Search from "./Search";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
