import React from 'react'
import './Vistron.css'

function Vistron() {

  return (
    <div>
        <div style={{ textAlign: 'center' }}>
            <a href='https://vistron.com/' target="_blank">
                <img className='brandingLogo' src='../../brands/Vistron.png' alt='VISTRON'/>
            </a>
            
        </div>
        <div className='vistronContainer'>

            <img src='../../Vistron/vistronImagen.png' className='vistronImg'/>
            <p>
            <ul>
                <li>
                    Sistema de visión artificial para la evaluación automática de la calidad de impresión en la industria del embalaje y del cartón ondulado.
                </li>
                <li>
                    Control al 100 % de la producción de su RDC, FFG e impresora según diversos criterios relacionados con la impresión. Detección instantánea de errores.
                </li>
                <li>
                    Reduce las reclamaciones y aumenta la satisfacción y fidelidad de los clientes.
                </li>
                <li>
                    Puede instalarse en máquinas de conversión de casi todos los fabricantes.
                </li>
            </ul>

            </p>
            
        </div>  
        
    </div>
  )
}

export default Vistron