import React from 'react'
import { Navbar, Container , Nav } from 'react-bootstrap'



function Navbarr(){
  return(
      <Container>
   <Navbar bg="primary" variant="dark" expand="lg" >
  <Navbar.Brand href="#home" className="text-white">Bogem React</Navbar.Brand>
  <Nav className="mr-auto text-white">
      <Nav.Link to="/">Home</Nav.Link>
      <Nav.Link to="/about">About</Nav.Link>
      <Nav.Link to="/contact">Contact</Nav.Link>
    </Nav>
 
</Navbar>
</Container>
    
    )
}


export default Navbarr;