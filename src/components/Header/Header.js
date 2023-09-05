import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className='title' to="/">            <img src='./Logo-Azul.png' alt="ESKAMAQ" className='logo' />        </Link>
        <div className='rightNavbar'>
          <Link to="/company">La empresa</Link>
          <NavDropdown title="Marcas" id="auxiliar">
            <NavDropdown.Item href="/Gopfert">Göpfert</NavDropdown.Item>
            <NavDropdown.Item href="/Corrpal">Corrpal Systems</NavDropdown.Item>
            <NavDropdown.Item href="/Bahmuller">Bahmüller</NavDropdown.Item>
            <NavDropdown.Item href="/BGM">BGM Flexo Folder Gluer</NavDropdown.Item>
            <NavDropdown.Item href="/JBMachinery">JB Machinery</NavDropdown.Item>
            <NavDropdown.Item href="/Vistron">Vistron</NavDropdown.Item>
            <NavDropdown.Item href="/StockMaschinenbau">Stock Maschinenbau</NavDropdown.Item>
            <NavDropdown.Item href="/Minda">Minda</NavDropdown.Item>
          </NavDropdown>
        
        </div>
        </Container>
    </Navbar>
  );
}

export default Header;