import React from 'react'
import './Item.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Item({dataItem}) {
  
  let objectLength = Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }

  const {image, name, machine, measure} = dataItem;
  const videoUrl = `${image}#t=7`; // Agregar ?start=2 al final de la URL

  return (
    <div className='itemContainer'>
      <div className='swiperText'>
        <h5> {name} </h5>
        <p className='swiperMachine'>{machine}</p>
      </div>
      
      {Array.isArray(image) ? (
        <div>
          <img src={image[0]} alt={name} className='swiperImage'/>
        </div>
        
      ) 
      : (
        <iframe width="300" height="300" src={videoUrl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoItem' ></iframe>
      )}

      {/* 
        <p>
          {Array.isArray(machine) ? machine.join(', ') : machine}
        </p> */}

        {/* <p style={{ fontWeight: '200' }}>
          {measure ? measure : null}
        </p> 
      */}
      
    </div>  
    
  )
}

export default Item