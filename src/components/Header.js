import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import '../Header.css'; // Import custom CSS for header styling

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="text-decoration-none text-light mx-2">Registration</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/" className="text-decoration-none text-light mx-2">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" className="text-decoration-none text-light mx-2">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
