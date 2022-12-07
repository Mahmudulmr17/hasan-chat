import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Authprovider from "./pages/AuthContext/Authprovider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Authprovider>
      <App />
    </Authprovider>
  </React.StrictMode>
);
