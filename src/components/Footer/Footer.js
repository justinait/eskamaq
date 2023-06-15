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
         
        <div className='socialMedia'>
        
            <EmailIcon
                // onClick={() => {          navigator.clipboard.writeText('sven@eskamaq.com')        }}
                onClick={handleClick}
                className='socialMediaIcon'
                fontSize='large'
            />
            {showCopied && (
                // <div className="copied">copiado</div>
                <div className={`copied ${showCopied ? 'active' : ''}`}>copied </div>
            )}
            
            <a href='https://www.linkedin.com/in/sven-kloeckner-833728131/' target="_blank">
                <LinkedInIcon className='socialMediaIcon' fontSize='large' />
            </a>

            <a href='https://wa.link/znoo7b' target="_blank">
                <WhatsAppIcon className='socialMediaIcon' fontSize='large' />
            </a>
        </div>
        
        <div className='footerDiv'>
            <img src='./Logo-Blanco.png' alt="ESKAMAQ" className='logoFooter' />

            <p className='contactFooter'>
                Cel: +54 9 343 5034079
                <br/>
                Sven@eskamaq.com
            </p>

        </div>
        
    </div>
  )
}

export default Footer