import React from 'react'
import './Item.css'

function Item({dataItem}) {
  
  let objectLength = Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }

  const {image, name, machine, measure} = dataItem;
  const videoUrl = `${image}#t=7`;
  
  return (
    <div className='itemContainer'>
      <div className='swiperText'>
        <h3> {name} </h3>
        <p className='swiperMachine'>{machine}</p>
      </div>
      
      {Array.isArray(image) ? (
        <img src={image[0]} alt={name} className='swiperImage'/>
      ) 
      : (
        <video controls width="640" height="360" className='videoItem'>
          <source src={videoUrl} type="video/mp4" />
          Tu navegador no admite el elemento de video.
        </video>
      )}
      
    </div>  
    
  )
}

export default Item