import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Add from "../img/addAvatar.png";
import "../style.scss";
import { AuthContext } from "./AuthContext/Authprovider";
const Register = () => {
  const { creatUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.value;
    const password = form.value;
    // console.log(email, /password);
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hasan Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input
            // required
            style={{ display: "none" }}
            type="file"
            accept="image/*"
            id="file"
          />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
