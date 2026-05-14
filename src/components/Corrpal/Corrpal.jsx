import React from 'react'
import './Corrpal.css'

function Corrpal() {
  return (
    <div>
        <div className='divBrandingLogo'>
          <a href='https://corrpal.com/maschinen/' target="_blank">
            <img className='brandingLogo' src='../../brands/CorrpalSystems.png' alt='Corrpal Systems' />
          </a>
        </div>
        
        <div className='descriptionContainer'>
          <p className='descriptionBrand'>Calidad hecha en Suecia</p>
          <p className='textDescriptionBrand'>La compañía ha estado diseñando y produciendo principalmente paletizadores y interruptores desde 1995, 100% "Hecho en Suecia".</p>
        </div>
        <div style={{textAlign: 'center'}}>
          <video controls width="640" height="360" className='videoCorrpal'>
            <source src='https://res.cloudinary.com/dsgxxcikg/video/upload/v1695132916/eskamaq/corrpaldraft_xj1j89.mp4' type="video/mp4" />
            Tu navegador no admite el elemento de video.
          </video>
        </div> 
    </div>
  )
}

export default Corrpal