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
  
  return (
    <div className='itemContainer'>

      {Array.isArray(dataItem.image) ? (

        <Carousel className='carouselHome'>
          {dataItem.image && dataItem.image.map((e, index) => (
            <div key={index}>
              <img src={e} alt={`Imagen ${index}`} />
            </div>
          ))}
        </Carousel>
      ) : (
        <iframe width="300" height="300" src={dataItem.image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className='videoItem' ></iframe>
      )}

      <h5> {dataItem.name} </h5>
      <p>
        {Array.isArray(dataItem.machine) ? dataItem.machine.join(', ') : dataItem.machine}
      </p>
      <p style={{ fontWeight: '200' }}>
        {dataItem.measure ? dataItem.measure : null}
      </p>
      

    </div>  
    
  )
}

export default Item