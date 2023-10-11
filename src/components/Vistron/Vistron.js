import React from 'react'
import './Vistron.css'

function Vistron() {

  return (
    <div>
        <div style={{ textAlign: 'center' }}>
            <a href='https://vistron.com/' target="_blank">
                <img className='vistronLogo' src='../../brands/Vistron.png' alt='VISTRON'/>
                {/* className='brandingLogo' */}
            </a>
        </div>
        <div className='vistronIntro'>
            <p className='vistronTitle'>Tecnología clave para el control de procesos.</p>
            
            <p className='vistronDescription'>Vistron GMBH es una empresa operativa a nivel mundial, 
            <span className='gray'> con sede en Göttingen, Alemania, y con una subsidiaria cerca de Tarragona, España, especializada en el </span>
            desarrollo, fabricación, distribución y servicio de sistemas de visión artificial industrial para el control y optimización de los procesos de fabricación.
            </p>

        </div>
        
        <p className='printInspect'>Print Inspect</p>
        
        <div className='printInspectContainer'>

            <div className='vistronInfoContainer'>
                
                <img src='../../Vistron/vistronImagen1.png' className='vistronImg'/>
                
                <p className='vistron1'>
                    Sistema de visión artificial para la 
                    <span className='blue'> evaluación automática de la calidad de impresión </span>
                    en la industria del embalaje y del cartón ondulado.
                    <span className='blue'> Control al 100 % de la producción </span>
                    de su RDC, FFG e impresora según diversos criterios relacionados con la impresión. 
                    <span className='blue'> Detección instantánea de errores. </span>
                </p>
                
            </div>  
            <div className='vistronInfoContainer reverse'>
                
                <p className='vistron1'>
                    Reduce las quejas y 
                    <span className='blue'> aumenta la satisfacción y fidelidad de los clientes. </span>
                    Puede instalarse en máquinas de conversión de casi todos los fabricantes.
                </p>
                
                <img src='../../Vistron/printInspect.jpg' className='vistronImg'/>
                
            </div>  
        </div>
    </div>
  )
}

export default Vistron