import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";

function Signup() {
  const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      mobileNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3002/auth/signup",
        user,
        { withCredentials: true }
      );

      console.log(res.data);
      alert("Successfully signup");
      setLoading(false);
      navigate("/");
    } catch (err) {
      setLoading(false);
      if (err.response) {
        setError(err.response.data.message || "Signup failed!");
        console.log(err.response.data);
      } else if (err.request) {
        setError("Network Error: Backend server not responding. Make sure backend is running on port 3002");
        console.log("Error:", err.request);
      } else {
        setError("Error: " + err.message);
        console.log("Error:", err.message);
      }
    }
  };

  return (
  <div className="signup-container">
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>

      {error && <p style={{ color: "red", marginBottom: "10px", fontSize: "14px" }}>{error}</p>}

      <input type="text" placeholder="Username" value={user.username} onChange={handleChange} name="username" required/>
      <input type="email" placeholder="Email" value={user.email} onChange={handleChange} name="email" required/>
      <input type="password" placeholder="Password" value={user.password} onChange={handleChange} name="password" required/>
      <input type="number" placeholder="Mobile Number" value={user.mobileNumber} onChange={handleChange} name="mobileNumber" required/>

      <button type="submit" disabled={loading}>{loading ? "Signing up..." : "Signup"}</button>
    </form>
  </div>
);
}

export default Signup;
