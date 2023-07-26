import React from 'react'

function Corrpal() {
  return (
    <div>
        <h3>Corrpal Systems</h3>
        <video controls width="640" height="360">
        <source src='../../Corrpal Systems/corrpal.mp4' type="video/mp4" />
        {/* Puedes agregar más formatos de video aquí para compatibilidad con diferentes navegadores */}
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  )
}

export default Corrpal