import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './Contact.css'

function Contact() {
  return (
    <div>
        {/* < LinkedInIcon />
        https://www.linkedin.com/in/sven-kloeckner-833728131/
        < PhoneAndroidIcon />
        Cel: +54 9 343 5034079 */}


        <a href='https://www.linkedin.com/in/sven-kloeckner-833728131/' target="_blank">
            <LinkedInIcon className='socialMediaIcon' fontSize='large' />
        </a>

        <a href='https://wa.link/znoo7b' target="_blank">
            <WhatsAppIcon className='socialMediaIcon' fontSize='large' />
        </a>
        
        {/* <EmailIcon 
            onClick={() => {          navigator.clipboard.writeText('justiiturraspe@gmail.com')        }}
            className='socialMediaIcon'
            fontSize='large'
        /> */}
    </div>
  )
}

export default Contact