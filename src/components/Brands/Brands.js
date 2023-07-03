import React from 'react'
import './Brands.css'
import Item from '../Item/Item'

{/* <p className='MarcaTitle'>Nombre de la Marca</p> */}

function Brands({brandsArray}) {

  // console.log({brandsArray[0]});
  return (
    <>
      {brandsArray.map((e, i) => {
        
        return (
          <div className='brandsContainer'>
          { 
          Object.values(e).map((element) => {
            return         <Item key={element.id+i} dataItem={element}/>
          })}

          </div>
          
        )
      })}

    </>
  )

      
      
  
}

export default Brands