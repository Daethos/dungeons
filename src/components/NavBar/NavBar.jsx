import './NavBar.css'
import { Link } from 'react-router-dom';
import React from "react";
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import userService from '../../utils/userService';

export default function NavBar({ user, setUser, handleLogOut, handleColor }) {
    console.log(user, "user in NavBar!");
    function handleLogOut() {
        userService.logout();
        setUser(null);
    }
    return (
        <Navbar bg="black" expand="lg">
        <Container fluid>
        
        {/* &nbsp;&nbsp;<span className="text-info">{user?.email}</span> */}
        
        <Link to="/" className="nav-item">
            <img src={user?.photoUrl} alt={user?.photoUrl} id="nav-pic" />
        </Link>
        <Navbar.Toggle type="button" aria-controls="basic-navbar-nav" className="bg-info" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
        &nbsp;&nbsp;
        <Link to="/Monsters" className="text-info btn btn-lg btn-outline-black">Monsters</Link>
        &nbsp;&nbsp;
        <Link to="/Characters" className="text-info btn btn-lg btn-outline-black">Characters</Link>
        &nbsp;&nbsp;
        <Link to="/Spells" className="text-info btn btn-lg btn-outline-black">Spells</Link>
        &nbsp;&nbsp;
        <NavDropdown title="Background" bg="black" className="text-info btn btn-lg btn-outline-black" id="basic-nav-dropdown">
            <NavDropdown.Item type="submit" onClick={handleColor} name="B13" value="B13" className="text-primary btn btn-lg">Blue</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="G13" value="G13" className="text-success btn btn-lg">Green</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="R13" value="R13" className="text-danger btn btn-lg">Red</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="Y13" value="Y13" className="text-warning btn btn-lg">Yellow</NavDropdown.Item>
        </NavDropdown>
        {   user 
        ? <Link to="" onClick={handleLogOut} className="text-danger btn btn-lg btn-outline-black">Log Out</Link>
        : <Link to="/login" className="text-success btn btn-lg btn-outline-black">Log In</Link>
        }
        
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}