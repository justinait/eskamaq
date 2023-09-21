import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  const [marcasActive, setMarcasActive] = useState(false);
  const [empresaActive, setEmpresaActive] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className='navbar'>
        <Link 
          className='title' 
          onClick={() => {
            setShowDropdown(false)
            setEmpresaActive(false);
            setMarcasActive(false);
            }} to="/">    
          <img src='./Logo-Azul.png' alt="ESKAMAQ" className='logo' />        
        </Link>
        
        <div className='rightNavbar'>
          <Link
            className={`button ${marcasActive ? 'activeButton brandsButton' : 'brandsButton'}`}
            onClick={() => {
              toggleDropdown();
              setMarcasActive(true);
              setEmpresaActive(false);
            }}
          >
            Marcas
          </Link>
          <Link
            to="/company"
            className={`button ${empresaActive ? 'activeButton companyButton' : 'companyButton'}`}
            onClick={() => {
              setEmpresaActive(true);
              setMarcasActive(false);
              setShowDropdown(false);
            }}
          >
            La empresa
          </Link>

        </div>
      </div>
      
      {showDropdown && 
        <div className={`dropdown-content ${showDropdown ? 'show dropdown' : 'dropdown'}`}>
          <Link to="/Gopfert" onClick={toggleDropdown}>Göpfert</Link>
          <Link to="/Corrpal" onClick={toggleDropdown}>Corrpal Systems</Link>
          <Link to="/Bahmuller" onClick={toggleDropdown}>Bahmüller</Link>
          <Link to="/BGM" onClick={toggleDropdown}>BGM Flexo Folder Gluer</Link>
          <Link to="/JBMachinery" onClick={toggleDropdown}>JB Machinery</Link>
          <Link to="/Vistron" onClick={toggleDropdown}>Vistron</Link>
          <Link to="/StockMaschinenbau" onClick={toggleDropdown}>Stock Maschinenbau</Link>
          <Link to="/Minda" onClick={toggleDropdown}>Minda</Link>
          <Link to="/Absolute" onClick={toggleDropdown}>Absolute</Link>
        </div>
      }

    </div>

  );
}

export default Header;