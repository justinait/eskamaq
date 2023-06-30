import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { NavLink } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className='title' href="/">            <img src='./Logo-Azul.png' alt="ESKAMAQ" className='logo' />        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            {/* <Nav.Link href="/contact">Contacto</Nav.Link> */}
            <Nav.Link href="/company">La empresa</Nav.Link>
            <NavDropdown title="Marcas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Gopfert">Göpfert</NavDropdown.Item>
              <NavDropdown.Item href="/Bahmuller">Bahmüller</NavDropdown.Item>
              <NavDropdown.Item href="/BGM">BGM</NavDropdown.Item>
              <NavDropdown.Item href="/Minda">Minda</NavDropdown.Item>
              <NavDropdown.Item href="/JBMachinery">JB Machinery</NavDropdown.Item>
              <NavDropdown.Item href="/Vistron">Vistron</NavDropdown.Item>
              <NavDropdown.Item href="/CorrpalSystems">Corrpal Systems</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;