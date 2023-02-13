import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar fixed="top" variant="dark" bg="dark" className="navbar d-flex justify-content-between p-2">
        <Navbar.Brand className="ps-3">
            <Link smooth to="/#home" className="link"><h3>M H</h3></Link>
        </Navbar.Brand>
        <Nav className="flex-row pe-5">
            <Nav.Item>
                <Nav.Link as={Link} smooth to="/#about" className="link">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} smooth to="/#skills" className="link">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} smooth to="/#projects" className="link">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} smooth to="/#contact" className="link">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
  )
}

export default Header