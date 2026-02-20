import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";
const API_URL = process.env.REACT_APP_API_URL;

function Login() {
    const [user, setUser] = useState({ email: "", password: "" })
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await axios.post(
                `${API_URL}/auth/login`,
                user,
                { withCredentials: true }
            );

            toast.success(res.data.message || "Login successful");
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            toast.error("Login failed")
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>
                <p className="switch-auth">
                    Don’t have an account?{" "}
                    <span onClick={() => navigate("/signup")}>Sign Up</span>
                </p>
            </form>
        </div>
    );
}

export default Login;