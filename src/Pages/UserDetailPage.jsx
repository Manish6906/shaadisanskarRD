import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../Component/Navbar/NavBar2';
import UserDetails from '../Component/UserDetail/UserDetails';

function UserDetailPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token'); // or however you store your token
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Navbar2 />
      <UserDetails />
    </div>
  );
}

export default UserDetailPage;
