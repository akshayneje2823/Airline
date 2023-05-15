import React from 'react'
import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import Logout from './Auth/Logout';
import { useSelector } from 'react-redux';

// googleLogout();

function Navigation() {

    const isLogin = useSelector(state => state.Airline.isLogin);
    const userName = useSelector(state => state.Airline.userName)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Airline</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Airline Data</Nav.Link>
                        </LinkContainer>

                    </Nav>
                    <Nav>

                    </Nav>
                    <Form className="d-flex">
                        <h4 style={{'color':"white","margin":"2"}}>{userName}</h4>
                        {isLogin ? <Logout /> : null}

                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation