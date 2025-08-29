import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/jobs" style={{ margin: "10px", color: "white" }}>Jobs</Link>
      <Link to="/post-job" style={{ margin: "10px", color: "white" }}>Post Job</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px", color: "white" }}>Register</Link>
    </nav>
  );
}

export default Navbar;
