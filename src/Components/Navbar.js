import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Hasan Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/8283967/pexels-photo-8283967.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <span>Jhon</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
