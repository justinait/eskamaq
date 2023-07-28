import React from 'react'
import './Minda.css'

function Minda() {
  return (
    <div className='mindaContainer'>
      <div style={{ textAlign: 'center' }}>
        <img className='brandingLogo' src='../../brands/Minda.png'/>
      </div>

      <div className='mindaYoutubeContainer'>
        <iframe className='mindaYoutube' src="https://www.youtube.com/embed/KjS_4SuPv0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <div className='mindaInfo'>
        <h6>Intralogistica automatizada e integral para todos los procesos de producción corrugado</h6>
        <ul>
          <li>Manejo de bobinas de papel    </li>        
          <li>Salida de corrugado    </li>        
          <li>Sistemas de almacenamiento    </li>        
          <li>Manejo de abastecimineto para area de conversion    </li>        
          <li>Machine Periphery    </li>        
          <li>Manejo de producto terminado    </li>        
          <li>Almacén vertical de gran altura    </li>        
        </ul>  
      </div>
      
    </div>
  )
}

export default Minda