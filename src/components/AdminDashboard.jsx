import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
const[users, setUsers] = useState([]);
const authState = useSelector(state => state.auth);
const token = authState.token;
const userId = authState.userId;
const dispatch = useDispatch();
const navigate = useNavigate();

    const fetchData = async () => {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          const response = await axios.get(
            "http://localhost:5000/api/user/fetchAllProfile",
            config
          );
          const data = response.data;
          console.log(data);
          setUsers(data.allUser);
          console.log(data.allUser);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(()=>{
        fetchData();
      },[])

    const handleSignOut=()=>{
        dispatch(logout());
        navigate("/login")
    }
    
  return (
    <div>AdminDashboard
        <button onClick={handleSignOut}>Sign out</button>
        <table className="user-table">
        <thead>
          <tr>
            <th className="table-header">Username</th>
            <th className="table-header">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {users ? (
            users.map((user) => (
              <tr key={user._id}>
                <td className="user-data">{user.username}</td>
                <td className="user-data">{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="no-users">
                No users to display
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDashboard