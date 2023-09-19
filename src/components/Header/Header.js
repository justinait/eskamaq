import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [showDropdown, setShowDropdown] = useState(false)
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className='navbar'>
        <Link className='title' to="/">            <img src='./Logo-Azul.png' alt="ESKAMAQ" className='logo' />        </Link>
        
        <div className='rightNavbar'>
          
          <p className='brandsButton' onClick={toggleDropdown}>Marcas</p>       
          <Link to="/company" className='companyButton'>La empresa</Link>
          
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
        </div>
      }

    </div>

  );
}

export default Header;