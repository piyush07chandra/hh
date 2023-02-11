import React, {  useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Navbarr =()=> {
    const [open,setOpen]=useState(false);
   const showbar=()=>{
      setOpen (true)
   }
 
   useEffect(()=>{
    let handler=()=>{
        setOpen (false)  
             
    };
document.addEventListener('mousedown',handler);
   })


    

    
  return (
    <div>
      <Navbar  fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container  >
        <Navbar.Brand  as={Link} to={"/"}>Portfolio</Navbar.Brand>
        <Navbar.Toggle  aria-controls="my-nav" />
        <Navbar.Collapse  class={`navbar-collapse collapse ${open?`active`:`inactive`} `} id="my-nav">
          <Nav className="me-auto ">
            <Nav.Link onClick={showbar}  as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link onClick={showbar} as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link onClick={showbar} as={Link} to="/Contact">Contact</Nav.Link>
            <NavDropdown title="Social Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/piyushchandra07/">instagram</NavDropdown.Item>
              <NavDropdown.Item href="https://www.facebook.com/piyush.chandra.58910">facebook</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/piyush-chandra-16418722b/">linkedin</NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/@1mystic486">you tube</NavDropdown.Item>
              <NavDropdown.Item href="https://bit.ly/3kOtgwK">whats app</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr;
