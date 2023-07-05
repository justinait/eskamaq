import React from 'react'
import './Brands.css'
import Item from '../Item/Item'

{/* <p className='MarcaTitle'>Nombre de la Marca</p> */}

function Brands({brandsArray}) {

  return (
    <>
      {brandsArray.map((e, i) => {

        const values = Object.values(e);
        const valuesExceptLast = values.slice(0, values.length - 1);
        return (
          <div className='brandsContainer'>
          { 
          valuesExceptLast.map((element) => {
            return         <Item key={element.id+i} dataItem={element}/>
          })}

          </div>
          
        )
      })}

    </>
  )

      
      
  
}

export default Brands