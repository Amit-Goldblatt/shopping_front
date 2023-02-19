
import {LinkContainer} from 'react-router-bootstrap'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import bird2 from '../assets/bird2.png';
import{FaShoppingCart} from "react-icons/fa";
import '../App.css'

function Header() {
  return (
    <Navbar className="neo-brutalist-navbar"  fixed="top" style={{padding:"0px"}} >
      <Container>
        <LinkContainer to="/">
      <Navbar.Brand style={{paddingBottom:"0px", paddingTop:"0px"}}>
      <img
              src={bird2}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              
            />
        
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="neo-brutalist-nav">
            <Nav.Link className="neo-brutalist-link" href="/about">about</Nav.Link>
            <Nav.Link className="neo-brutalist-link" href="/cart"><FaShoppingCart size={35}/></Nav.Link>
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
