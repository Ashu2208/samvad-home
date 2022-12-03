import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("userStatus");
        navigate("/");
    }
    return (
        <div>Dashboard
            <Nav><button onClick={() => { handleLogout() }}>Logout</button></Nav>
        </div>
    )
}

export default Dashboard