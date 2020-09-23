import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

const Header = () => (
  <Navbar expand="md" variant="dark">
    <Navbar.Brand href="/">Daniel Troyano</Navbar.Brand>
    <Navbar.Toggle aria-controls="header-nav" />
    <Navbar.Collapse id="header-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Button href="/resume.pdf" id="resume-button" size="lg" variant="outline-info">Resume</Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
