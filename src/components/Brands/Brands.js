import React, { useState } from 'react';
import './Brands.css';
import Item from '../Item/Item';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Brands({ brandArray }) {
  const [selected, setSelected] = useState('todas'); // Estado compartido para 'selected'

  return (
    <>
      {brandArray.map((e, i) => {
        const values = Object.values(e);
        const valuesExceptLast = values.slice(0, values.length - 1);
        const longitud = values.length;
        const brand = values[longitud - 1];
        const machines = values[longitud - 2];

        console.log(values);

        return (
          <div key={i}>
            {/* category by machine */}
            <h3>{brand}</h3>

            <ButtonGroup aria-label="Basic example" className='categoryByMachine'>
              <Button
                className='machineButton'
                variant="outline-secondary"
                onClick={() => setSelected('todas')}
                active={selected === 'todas'}
              >
                Todas
              </Button>
              {Array.isArray(machines) &&
                machines.map((e, index) => (
                  <Button
                    key={index}
                    className='machineButton'
                    variant="outline-secondary"
                    onClick={() => setSelected(e)}
                    active={selected === e}
                  >
                    {e}
                  </Button>
                ))}
            </ButtonGroup>

            <div className='brandsContainer'>
              {valuesExceptLast.map((e) => {
                if (selected === 'todas' || (Array.isArray(machines) && selected === e.machine)) {
                  return <Item key={e.id} dataItem={e} />;
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Brands;