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
        <Navbar className="" expand="lg" id="navbar">
        <Container fluid>
        
        {/* &nbsp;&nbsp;<span className="text-info">{user?.email}</span> */}
        
        <Link to="/" className="nav-item">
            <img src={user?.photoUrl} alt={user?.photoUrl} id="nav-pic" />
        </Link>
        <Navbar.Toggle type="button" aria-controls="basic-navbar-nav" className="" />
        <Navbar.Collapse id="basic-navbar-nav" className="links">
        &nbsp;&nbsp;
        <Link to="/Monsters" className="text-info btn btn-lg btn-outline-black">Monsters</Link>
        &nbsp;&nbsp;
        <Link to="/Characters" className="text-info btn btn-lg btn-outline-black">Characters</Link>
        &nbsp;&nbsp;
        <Link to="/Spells" className="text-info btn btn-lg btn-outline-black">Spells</Link>
        &nbsp;&nbsp;
        <NavDropdown title="Background" className="text-info btn btn-lg btn-outline-black" id="basic-nav-dropdown">
            <NavDropdown.Item type="submit" onClick={handleColor} name="B4" value="B4" className="text-primary btn btn-lg">Blue - Smooth</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="B13" value="B13" className="text-primary btn btn-lg">Blue - Stressed</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="G4" value="G4" className="text-success btn btn-lg">Green - Smooth</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="G13" value="G13" className="text-success btn btn-lg">Green - Stressed</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="R4" value="R4" className="text-danger btn btn-lg">Red - Smooth</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="R13" value="R13" className="text-danger btn btn-lg">Red - Stressed</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="Y4" value="Y4" className="text-warning btn btn-lg">Yellow - Smooth</NavDropdown.Item>
            <NavDropdown.Item type="submit" onClick={handleColor} name="Y13" value="Y13" className="text-warning btn btn-lg">Yellow - Stressed</NavDropdown.Item>
        </NavDropdown>
        {   user 
        ? <Link to="" onClick={handleLogOut} className="text-warning btn btn-lg btn-outline-black">Log Out</Link>
        : <Link to="/login" className="text-success btn btn-lg btn-outline-black">Log In</Link>
        }
        
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}