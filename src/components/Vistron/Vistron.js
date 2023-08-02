import React from 'react'
import './Vistron.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Vistron() {
    const images = [
        '../../Vistron/vistron3.png',
        '../../Vistron/vistron4.png',
        '../../Vistron/vistron6.png'
    ];
      
  return (
    <div>
        <div style={{ textAlign: 'center' }}>
            {/* <h3>Vistron</h3> */}
            <img className='brandingLogo' src='../../brands/Vistron.jpg' alt='VISTRON'/>
        </div>
        <div className='vistronContainer'>
            <Carousel className='vistronImg' >
                {images.map((image, index) => (
                    <div key={index}>
                    <img src={image} alt={`Imagen ${index}`} />
                    </div>
                ))}
            </Carousel>


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

        </div>  
        
    </div>
  )
}

export default Vistron