import React from 'react'
import './Corrpal.css'

function Corrpal() {
  return (
    <div>
        <h3>Corrpal Systems</h3>
        <video controls width="640" height="360" className='videoCorrpal'>
        <source src='../../Corrpal Systems/corrpaldraft.mp4' type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  )
}

export default Corrpal