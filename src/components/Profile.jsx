import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authAction';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
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
        `http://localhost:5000/api/user/fetchProfile/${userId}`,
        config
      );
      const data = response.data;
      console.log(data);
      setUser(data.getProfile); // Assuming the response contains a single user
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSignOut = () => {
    // Dispatch the logout action to clear the authentication state
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={handleSignOut}>Sign out</button>
      {user ? (
        <table className="user-table">
          <thead>
            <tr>
              <th className="table-header">Username</th>
              <th className="table-header">Email</th>
              <th className="table-header">Roles</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="user-data">{user.username}</td>
              <td className="user-data">{user.email}</td>
              <td className="user-data">{user.roles}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        // You can add a loading or error message here
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default Profile;
