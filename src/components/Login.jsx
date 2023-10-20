 import React, { useEffect, useState } from "react";
import "../styles/Login.css"; // Import your CSS file
import { Link, useNavigate } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { login, setUserAuthId } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";

function Login() {
 const [email,setEmail]= useState();
 const[password, setPassword]=useState();
 const[user,setUser] = useState([]);

  const [tokenInput, setTokenInput] = useState('');


 const navigate =useNavigate();
 const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
      const response = await axios.post("http://localhost:5000/api/user/login",{ email, password})
      const data=  response.data;
      console.log(data);
      setUser(data);
      console.log(data.token)
      toast.success("SignIn successfully");
      console.log(data.user._id)
        
     dispatch(login(data.token));
     dispatch(setUserAuthId(data.user._id));
     if (data.user.roles === 'admin') {
        navigate('/admin'); // Redirect to '/admin' if the user is an admin
      } else {
        navigate('/profile'); // Redirect to '/profile' for non-admin users
      }
  }catch(error){
      toast.warning("Invalid Credentials");
      console.log("Error While making it SignIn",error)
  }
  };



  return (
    <div className="container">
      <h2>Sign In</h2>
      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter Email Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
      <div>
        <Link to='/signup'><button className="sign-up-button">Sign up</button></Link>
      </div>
    </div>
  );
}

export default Login;