import React, { useState } from 'react';
import './Brands.css';
import Item from '../Item/Item';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Brands({ brandArray }) {

  const [selected, setSelected] = useState('todas');

  const dataBranding = [
    { name: 'Göpfert', logo: '../../brands/Goepfert.jpg' },
    { name: 'Corrpal Systems', logo: '../../brands/CorrpalSystems.png' },
    { name: 'Bahmüller', logo: '../../brands/bahmuller.jpg' },
    { name: 'BGM Flexo Folder Gluer', logo: '../../brands/bgm.jpg' },
    { name: 'JB Machinery', logo: '../../brands/JBMachinery.png' },
    { name: 'Vistron', logo: '../../brands/Vistron.jpg' },
    { name: 'Stock Maschinenbau', logo: '../../brands/StockM.png' },
    { name: 'Minda', logo: '../../brands/Minda.png' },
  ];

  return (
    <>
      {brandArray.map((e, i) => {
        const values = Object.values(e);
        const valuesExceptLast = values.slice(0, values.length - 1);
        const longitud = values.length;
        const brand = values[longitud - 1];
        const machines = values[longitud - 2];
        
        let brandToRender = '';
        let logoBrandToRender= '';
        switch (brand) {
          case 'Gopfert':
            brandToRender = <h3>{dataBranding[0].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[0].logo}/>
            break;
          case 'Bahmuller':
            brandToRender = <h3>{dataBranding[2].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[2].logo}/>
            break;
          case 'BGM':
            brandToRender = <h3>{dataBranding[3].name}</h3>;
            logoBrandToRender = <img className='brandingLogo toBig' src={dataBranding[3].logo}/>
            break;
          case 'JBMachinery':
            brandToRender = <h3>{dataBranding[4].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[4].logo}/>
            break;
          case 'StockMaschinenbau':
            brandToRender = <h3>{dataBranding[6].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[6].logo}/>
            break;

          default:
          brandToRender = <h3>{brand}</h3>
        }

        console.log(dataBranding[0].logo);
        return (
          <div key={i}>
            <div style={{ textAlign: 'center' }}>
              {/* {brandToRender} */}
              {logoBrandToRender}

            </div>
            
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