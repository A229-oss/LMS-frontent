import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">  

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#home">Courses</Nav.Link>
            <NavDropdown title="Teachers" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/loginteacher">
              Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/Register">
               Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashteacher">
               dashboard
              </NavDropdown.Item >
              
            </NavDropdown>
            
            <NavDropdown title="User" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/loginuser">
              Login
              </NavDropdown.Item>
              <NavDropdown.Item href="/Register">
               Register
              </NavDropdown.Item>
              <NavDropdown.Item href="/dashboard">
               dashboard
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header