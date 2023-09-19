import React from 'react'
import './Corrpal.css'

function Corrpal() {
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
          <a href='https://corrpal.com/maschinen/' target="_blank">
            <img className='brandingLogo' src='../../brands/CorrpalSystems.png' alt='Corrpal Systems' />
          </a>
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