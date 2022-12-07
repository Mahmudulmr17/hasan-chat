import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
