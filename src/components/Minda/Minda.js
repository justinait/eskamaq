import React from 'react'
import './Minda.css'

function Minda() {
  return (
    <div className='mindaContainer'>
      <div style={{ textAlign: 'center' }}> 
        <a href='https://www.minda.com/en/' target="_blank">
          <img className='brandingLogo toBig' src='../../brands/Minda.png' alt='Minda' />
        </a>        
      </div>

      <div className='mindaYoutubeContainer'>
        {/* <iframe className='mindaYoutube' src="https://www.youtube.com/embed/KjS_4SuPv0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
        <video controls width="640" height="360" className='videoCorrpal'>
          <source src='https://res.cloudinary.com/dsgxxcikg/video/upload/v1695318622/eskamaq/V%C3%ADdeo_sin_t%C3%ADtulo_Hecho_con_Clipchamp_1_uhugbe.mp4' type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
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