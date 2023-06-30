import React from 'react'

function Item({dataItem}) {
  console.log({dataItem});
  
  let objectLength = Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }
  
  return (
    <div>

      <img src={dataItem.image}/>  
      <p> {dataItem.name} </p>    

    </div>  
    
  )
}

export default Item