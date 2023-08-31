import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import RTB from './images/RTB.svg'; // Tell webpack this JS file uses this image
import Frame6 from './images/Frame6.svg'; // Tell webpack this JS file uses this image

// import '../src/App.css';

function NavbarComp() {
  return (
    <Navbar collapseOnSelect expand="lg" className="mt-4 textb" >
      <Container >
        <Navbar.Brand href="#home">
            <Image src={RTB} fluid/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav   ">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#features">BLOG</Nav.Link>
            <Nav.Link href="#pricing">ABOUT REPROLIFE</Nav.Link>
            <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">DIRECTORY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                EDUCATION
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">TRAINING</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                SERVICE PROVISION
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='frame'>
          <Image src={Frame6} fluid/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;