import React, { useState } from 'react'
import Item from '../Item/Item'

{/* <p className='MarcaTitle'>Nombre de la Marca</p> */}

function Brands({brandsArray}) {

  // console.log({brandsArray[0]});
  return (
    <>
      {brandsArray.map((e, i) => {
        //esto no me devuelve el item, me devuelve el acceso al array xq al ser objeto viste q medio mambo
        console.log({e})
        return (
          
          Object.values(e).map(element => {
            return            <Item key={element.id+i} dataItem={element}/>
          })
          
        )
      })}

    </>
  )

      
      
  
}

export default Brands