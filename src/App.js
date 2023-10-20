
import './App.css';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import Home from './pages/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/admin" element={<AdminDashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
