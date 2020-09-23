import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar bg="dark" expand="md" sticky="top" variant="dark">
    <Navbar.Brand href="#home">Daniel Troyano</Navbar.Brand>
    <Navbar.Toggle aria-controls="header-nav" />
    <Navbar.Collapse id="header-nav">
      <Nav>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
