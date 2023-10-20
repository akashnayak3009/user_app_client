import React, { useState } from "react";
import "../styles/SignupForm.css";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [roles, setRoles] = useState('user')


    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const response = await axios.post("http://localhost:5000/api/user/create", { email, username, password, roles })
            toast.success("SignUp successfully");
            const data = response.data;
            console.log(data);
        } catch (error) {
            toast.warning("Unique credentials required");
            console.log("Error While making it post", error)
        }
    };
    return (
        <div className="signup-container">
            <ToastContainer />
            <h2>SIGN UP</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter Full Name"

                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password here"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        name="role"
                        value={roles}
                        onChange={(e)=>setRoles(e.target.value)}
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Sign Up</button>
            </form>

            <div className="sign-in-link">
                Already have an account?<Link to='/login'><button>Sign In</button></Link>
            </div>
        </div>
    );
};



export default SignUp;
