import React from 'react'
import './Item.css'

function Item({dataItem}) {
  
  let objectLength = Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }
  
  return (
    <div className='itemContainer'>

      <img src={dataItem.image} className='itemImage'/>  
      <h4> {dataItem.name} </h4>
      <p>{dataItem.machine}</p>

    </div>  
    
  )
}

export default Item