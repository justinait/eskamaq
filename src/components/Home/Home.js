import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='homeDescription'>
        <p className='homeTitle'>Comprometidos en cada impresión.</p>
        <p className='homeSubtitle'>Reunimos los mejores proveedores de la industria y presentamos soluciones 
          de alto rendimiento y eficiencia para el proceso productivo de impresión flexográfica y troquelado</p>

      </div>

      <img src='./Home.jpeg' alt="" className='homeImage' />
      
      <img src='./HomeMobile.jpeg' alt="" className='homeImageMobile' />
      
    </div>
  )
}

export default Home