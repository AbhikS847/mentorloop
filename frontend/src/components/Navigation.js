import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar className="px-3 text-center" bg="light" expand="lg">
            <LinkContainer to="/"><Navbar.Brand>Mentorloop example</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/"><Nav.Link>All Users</Nav.Link></LinkContainer>
    <LinkContainer to="/create"><Nav.Link>Create Students/Teachers</Nav.Link></LinkContainer>
    <LinkContainer to="/update"><Nav.Link>Update Students/Teachers</Nav.Link></LinkContainer>
    <LinkContainer to="/remove"><Nav.Link>Remove Students/Teachers</Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Navigation
