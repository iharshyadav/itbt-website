import React from 'react'
import { Navbar } from 'react-bootstrap'
import {NavLink} from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

const NavbarMain = () => {
  return (
    <div>    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
    </Nav>
    </Navbar></div>
  )
}

export default NavbarMain