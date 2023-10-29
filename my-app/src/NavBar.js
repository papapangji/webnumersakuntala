import React from "react";
import { Navbar,Container,NavDropdown,Nav,Offcanvas,Form,Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import './Navbar.css';



export const NavBar = () =>{
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} bg="dark"variant="dark" expand={expand} className="mb-3">
              <Container fluid>
                <div class="head"> 
                <Navbar.Brand >Numer Project</Navbar.Brand>
                </div>
                <NavDropdown.Divider />
  

                <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">

                  <Offcanvas.Body>
                    <Nav className="body">
                    <NavDropdown.Item href="/Graphical">Graphical</NavDropdown.Item>
                        <br/>
                       <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
                       <br/>
                       <NavDropdown.Item href="/Onepoint">Onepoint</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Falseposition">Falseposition</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Secant">Secant</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Gauss_elimination">Gauss_elimination</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Newton">Newton</NavDropdown.Item>
                        <br/>
                        <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
                        <br/>
                        
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
}
