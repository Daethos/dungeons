import './NavBar.css'
import { Link } from 'react-router-dom';
import React from "react";

export default function NavBar({ user, handleLogOut }) {
    console.log(user, "user in NavBar!");
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-black">
        &nbsp;&nbsp;<span className="text-info">{user?.email}</span>
        <Link to="/" className="nav-item">
            <img src={user?.photoUrl} alt={user?.photoUrl} id="nav-pic" />
        </Link>
        &nbsp; | &nbsp;
        <Link to="/Monsters" className="btn btn-outline-info">Monsters</Link>
        &nbsp; | &nbsp;
        <Link to="/Characters/New" className="btn btn-outline-info nav-item">New Ascean</Link>
        &nbsp; | &nbsp;
        <Link to="/User/Characters" className="btn btn-outline-info nav-item">Your Ascean</Link>
        
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut} className="btn btn-outline-danger">Log Out</Link>
        </nav>
        {/* <nav className="navbar bg-black">
            <a className="btn btn-outline-danger" href="/logout">Logout</a>
        </nav> */}
        </div>
    );
}