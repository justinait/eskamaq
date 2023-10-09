import React from 'react'
import './Company.css'

function Company() {
  return (
    <div className='companyContainer'>

      <div className='companyIntroContainer'>
        
        <img src='./company1.png'/>
        
        <div className='companyIntro'>
          <p className='companyTitle'>Uniendo calidad, potencia y honestidad en cada impresión</p>
          <p className='companySubtitle'> Seriedad y honestidad marcan nuestro compromiso por brindar la mejor solución.</p>
        </div>
        
        <img src='./company2.png'/>
      
      </div>
      
      <div className='about'>
        <h4>Sobre nosotros</h4>
        <p>
          Reunimos los mejores proveedores de la industria y presentamos soluciones de alto rendimiento y eficiencia para el 
          proceso productivo de impresión flexográfica y troquelado. Contamos con vasta experiencia en el asesoramiento de equipos,
           con un enfoque sobre las necesidades técnicas de nuestros clientes para poder ofrecer las mejores soluciones del mercado. Seriedad y honestidad marcan nuestro compromiso por brindar la mejor solución para la inversión de equipos nuevos y modernizaciones en su proceso productivo.
        </p>
      
      </div>
      
    </div>
  )
}

export default Company