import React, { useState } from 'react';
import './Brands.css';
import Item from '../Item/Item';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Brands({ brandArray }) {

  const [selected, setSelected] = useState('todas');

  const dataBranding = [
    { name: 'Göpfert', logo: '../../brands/Goepfert.jpg', web: 'https://goepfert.de/' },
    { name: 'Corrpal Systems', logo: '../../brands/CorrpalSystems.png', web: 'https://corrpal.com/maschinen/' },
    { name: 'Bahmüller', logo: '../../brands/bahmuller.jpg', web: 'https://www.bahmueller.de/en-de/index.html' },
    { name: 'BGM Flexo Folder Gluer', logo: '../../brands/bgm.jpg', web: 'https://www.bahmueller.de/en-us/corrugated-board-converting/products/bgm-flexo-folder-gluer.html' },
    { name: 'JB Machinery', logo: '../../brands/JBMachinery.png', web: 'https://www.jbmachinery.com/' },
    { name: 'Vistron', logo: '../../brands/Vistron.jpg', web: 'https://vistron.com/' },
    { name: 'Stock Maschinenbau', logo: '../../brands/StockM.png', web: 'http://www.stock-maschinenbau.de/' },
    { name: 'Minda', logo: '../../brands/Minda.png', web: 'https://www.minda.com/en/' },
  ];

  return (
    <>
      {brandArray.map((e, i) => {
        const values = Object.values(e);
        const valuesExceptLast = values.slice(0, values.length - 2);
        const longitud = values.length;
        const brand = values[longitud - 1];
        const machines = values[longitud - 2];
        
        let brandToRender = '';
        let logoBrandToRender= '';
        let webBrand= '';
        switch (brand) {
          // brands in the database
          case 'Gopfert':
            brandToRender = <h3>{dataBranding[0].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[0].logo} alt={dataBranding[0].name} />
            webBrand = dataBranding[0].web;
            break;
          case 'Bahmuller':
            brandToRender = <h3>{dataBranding[2].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[2].logo} alt={dataBranding[2].name} />
            webBrand = dataBranding[2].web;
            break;
          case 'BGM':
            brandToRender = <h3>{dataBranding[3].name}</h3>;
            logoBrandToRender = <img className='brandingLogo toBig' src={dataBranding[3].logo} alt={dataBranding[3].name} />
            webBrand = dataBranding[3].web;
            break;
          case 'JBMachinery':
            brandToRender = <h3>{dataBranding[4].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[4].logo} alt={dataBranding[4].name} />
            webBrand = dataBranding[4].web;
            break;
          case 'StockMaschinenbau':
            brandToRender = <h3>{dataBranding[6].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[6].logo} alt={dataBranding[6].name} />
            webBrand = dataBranding[6].web;
            break;

          default:
          brandToRender = <h3>{brand}</h3>
        }

        return (
          <div key={i}>
            <div style={{ textAlign: 'center' }}>
              
              <a href={webBrand} target="_blank">
                {logoBrandToRender}
              </a>
              
            </div>
                
            <div className='brandsContainer'>
              <Swiper
                  className='swiperBrands'
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    767: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                    },
                    1420: {
                      slidesPerView: 2.6,
                      spaceBetween: 10,
                    },
                  }}
              >
                {valuesExceptLast.map((e, i) => {
                  return(
                    <SwiperSlide key={i}>
                      <Item dataItem={e} />
                    </SwiperSlide>
                  )
                  
                })}
              </Swiper>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Brands;


            {/* <ButtonGroup aria-label="Basic example" className='categoryByMachine'>
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
            </ButtonGroup> */}
            {/* if (selected === 'todas' || (Array.isArray(machines) && selected === e.machine)) { */}