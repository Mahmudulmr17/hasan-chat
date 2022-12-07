import { Link } from "react-router-dom";
import "../style.scss"
const Register = () => {

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hasan Chat</span>
        <span className="title">Register</span>
        <form >
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          
          <button >Sign In</button>
          
        </form>
        <p>
          You do have an account? <Link to="/register">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;