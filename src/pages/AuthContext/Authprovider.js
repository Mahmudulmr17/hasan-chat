import React from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const getInfo = {
    creatUser,
  };

  return;
  <Authprovider value={getInfo}>{children}</Authprovider>;
};

export default Authprovider;
