import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../App.css'

function Header() {
  return (
    <Navbar className="neo-brutalist-navbar" expand="lg" fixed="top"  >
      <Container>
        <Navbar.Brand className="neo-brutalist-brand" href="#home">Neo Brutalist</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="neo-brutalist-nav">
            <Nav.Link className="neo-brutalist-link" href="#features">Features</Nav.Link>
            <Nav.Link className="neo-brutalist-link" href="#pricing">Pricing</Nav.Link>
            <NavDropdown className="neo-brutalist-dropdown" title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="neo-brutalist-link" href="#deets">More deets</Nav.Link>
            <Nav.Link className="neo-brutalist-link" eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
