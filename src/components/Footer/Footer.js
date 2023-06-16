import React, { useState } from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    
    const [showCopied, setShowCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText('sven@eskamaq.com')
        setShowCopied(true);
        setTimeout(() => {
            setShowCopied(false);
        }, 1000);
    };

  return (
    <div className='footer'>
         
        <div className='socialMediaBox'>
        
            <div className='socialMedia'>
                <EmailIcon
                    onClick={handleClick}
                    className='socialMediaIcon'
                    fontSize='large'
                />
                {/* <p className='socialMediaText'>Sven@eskamaq.com</p> */}
                {showCopied && (
                    <div className={`copied ${showCopied ? 'active' : ''}`}>copiado </div>
                )}
                Sven@eskamaq.com
            </div>
            
            <div className='socialMedia'>
                <a href='https://wa.link/znoo7b' target="_blank">
                    <WhatsAppIcon className='socialMediaIcon' fontSize='large' />
                </a>
                343 5034079
            </div>
            
            <div className='socialMedia linkedin'>
                <a href='https://www.linkedin.com/in/sven-kloeckner-833728131/' target="_blank">
                    <LinkedInIcon className='socialMediaIcon' fontSize='large' />
                </a>
                linkedin.com/in/sven-kloeckner-833728131
            </div>
            
        </div>
        
        <div className='footerDiv'>

            <img src='./Logo-Blanco.png' alt="ESKAMAQ" className='logoFooter' />
            ©2023 Eskamaq. Desarrollado por Justina Iturraspe
        </div>
        
    </div>
  )
}

export default Footer