import React from 'react'
import './Brands.css'
import Item from '../Item/Item'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

{/* <p className='MarcaTitle'>Nombre de la Marca</p> */}

function Brands({brandsArray}) {
  
  return (
    <>
      {brandsArray.map((e, i) => {
        
        const values = Object.values(e);
        const valuesExceptLast = values.slice(0, values.length - 1);
        
        const longitud = values.length;
        const brand = values[longitud - 1];
        const machines = values[longitud - 2];

        console.log(machines);
        return (
          
          <div>
            {Array.isArray(machines) ? (

              <ButtonGroup aria-label="Basic example" className='categoryByMachine'>
                {
                  machines.map((e, i) => {
                    return <Button className='machineButton' variant="outline-secondary">{e}</Button>
                  })
                }
              </ButtonGroup>
            ) : '' }

            <div className='brandsContainer'>
                
              {       
              valuesExceptLast.map((element) => {
                return         <Item key={element.id+i} dataItem={element}/>
              })}

            </div>
          </div>          
        )
      })}
    </>
  )
}

export default Brands