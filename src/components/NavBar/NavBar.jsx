import './NavBar.css'
import { Link } from 'react-router-dom';
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import userService from '../../utils/userService';

export default function NavBar({ user, setUser, handleLogOut }) {
    console.log(user, "user in NavBar!");
    function handleLogOut() {
        userService.logout();
        setUser(null);
    }
    return (
        <Navbar bg="black" expand="lg">
        <Container>
        {/* &nbsp;&nbsp;<span className="text-info">{user?.email}</span> */}
        <Link to="/" className="nav-item">
            <img src={user?.photoUrl} alt={user?.photoUrl} id="nav-pic" />
        </Link>
        &nbsp; | &nbsp;
        <Link to="/Monsters" className="text-info btn btn-lg btn-outline-black">Monsters</Link>
        &nbsp; | &nbsp;
        <Link to="/Characters" className="text-info btn btn-lg btn-outline-black">Characters</Link>
        &nbsp; | &nbsp;
        <Link to="/Spells" className="text-info btn btn-lg btn-outline-black">Spells</Link>
        &nbsp;&nbsp;
        {   user 
        ? <Link to="" onClick={handleLogOut} className="text-danger btn btn-lg btn-outline-black">Log Out</Link>
        : <Link to="/login" className="text-success btn btn-lg btn-outline-black">Log In</Link>
        }
        
        </Container>
        </Navbar>
    );
}