import React from 'react'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { googleLogout } from '@react-oauth/google';

// googleLogout();

function Navigation() {
    const logoutFunction = () => {
        alert("sdfds")
        console.log(googleLogout())
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Airline</Navbar.Brand>
                </LinkContainer>                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/add'>
                            <Nav.Link>Add Airline</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/all-users'>
                            <Nav.Link>Users</Nav.Link>
                        </LinkContainer>
                       
                    </Nav>
                    <Nav>
                       <Button variant="outline-success" onClick={logoutFunction}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation