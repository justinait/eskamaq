import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';


function ContextAwareToggle({ children, eventKey, callback }) {
 
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );
  
  return (
    <button className='marcasButton'
      type="text"
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}


function Header() {
  const [collapsed, setCollapsed] = useState(false)
  const handleMenuClick = () => {
    setCollapsed(true);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link className='title' to="/">            <img src='./Logo-Azul.png' alt="ESKAMAQ" className='logo' />        </Link>
        <div className='rightNavbar'>
          <Link to="/company">La empresa</Link>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <ContextAwareToggle eventKey="0">Marcas</ContextAwareToggle>
                {/* Marcas */}
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <div className='dropdown'>
                  <Link to="/Gopfert" onClick={handleMenuClick}>Göpfert</Link>
                  <Link to="/Corrpal" onClick={handleMenuClick}>Corrpal Systems</Link>
                  <Link to="/Bahmuller" onClick={handleMenuClick}>Bahmüller</Link>
                  <Link to="/BGM" onClick={handleMenuClick}>BGM Flexo Folder Gluer</Link>
                  <Link to="/JBMachinery" onClick={handleMenuClick}>JB Machinery</Link>
                  <Link to="/Vistron" onClick={handleMenuClick}>Vistron</Link>
                  <Link to="/StockMaschinenbau" onClick={handleMenuClick}>Stock Maschinenbau</Link>
                  <Link to="/Minda" onClick={handleMenuClick}>Minda</Link>
                </div>
              </Accordion.Collapse>

            </Card>
            
          </Accordion>

            
          {/* </NavDropdown> */}
        
        </div>
        </Container>
    </Navbar>
  );
}

export default Header;