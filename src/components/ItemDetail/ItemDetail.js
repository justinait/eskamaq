import React from 'react'
import './ItemDetail.css'

function ItemDetail({dataItem}) {
  
  let objectLength = dataItem && Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }

  const {image, name, machine, description, dataName, technicalData} = dataItem;
  
  return (
    <div className='itemDetailContainer'>
      
      <div className='detailImageContainer'>
        {Array.isArray(image) && (
          <img src={image[0]} alt={name} className='detailImage'/>
        )}
      </div>


      <div className='textContainer'>

        <div className='detailText'>
          <h3> {name} </h3>
          <p className='detailMachine'>{machine}</p>

          <p className='detailDescription'>
            {description}
          </p>
        </div>

        <div className='detailDataContainer'>
          
          <p className='dataTitle'>Datos técnicos</p>
          <p className='dataSubtitle'>{dataName ? dataName : name}</p>

          {technicalData && Object.keys(technicalData).map((key, index) => (
            <div key={index}>
              <p>{key}</p>
              <p>{technicalData[key]}</p>
            </div>
          ))}

        </div>

      </div>

    </div>  
    
  )
}

export default ItemDetail