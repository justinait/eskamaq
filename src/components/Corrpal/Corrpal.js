import React from 'react'
import './Corrpal.css'

function Corrpal() {
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
          {/* <h3>Corrpal Systems</h3> */}
          <img className='brandingLogo' src='../../brands/CorrpalSystems.png'/>
        </div>
        
        <video controls width="640" height="360" className='videoCorrpal'>
        <source src='../../Corrpal Systems/corrpaldraft.mp4' type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  )
}

export default Corrpal