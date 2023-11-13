import React, { useState } from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Footer() {
    
    const handleClick = () => {
        navigator.clipboard.writeText('sven@eskamaq.com')
    }
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Copiar Email
        </Tooltip>
    );
    
  return (
    <div className='footer'>
        <div className='footerContainer'>
            
            <div className='socialMediaBox'>
            
                <div className='socialMedia'>
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                    >
                    <EmailIcon
                        onClick={handleClick}
                        className='socialMediaIcon'
                        fontSize='small'
                    />
                </OverlayTrigger>
                    Sven@eskamaq.com
                </div>
                
                <div className='socialMedia'>
                    <a href='https://wa.link/znoo7b' target="_blank">
                        <WhatsAppIcon className='socialMediaIcon' fontSize='small' />
                    </a>
                    +54 9 343 503 4079 
                </div>
                
                <div className='socialMedia linkedin'>
                    <a href='https://www.linkedin.com/in/sven-kloeckner-833728131/' target="_blank">
                        <LinkedInIcon className='socialMediaIcon' fontSize='small' />
                    </a>
                    linkedin.com/in/sven-kloeckner-833728131
                </div>
        
            </div>
        
            <div className='svenFooter'>
                <img src='./logoSK.png' alt="Sven Klockner" className='logoFooter' />
                Sven Klockner
            </div>
        

        </div>
        
        <p className='final'>Copyright ©2023 Eskamaq. Desarrollado por Justina Iturraspe</p>
        
    </div>
  )
}

export default Footer