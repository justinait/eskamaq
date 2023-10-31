import React, { useEffect, useState } from 'react';
import './Brands.css';
import Item from '../Item/Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useParams } from 'react-router-dom';

function Brands({ brandArray }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const { brand } = useParams();
  const [selected, setSelected] = useState('Todos los modelos');
  const [gopfert, setGopfert] = useState(false);

  const dataBranding = [
    { name: 'Göpfert', logo: '../../brands/Goepfert.jpg', web: 'https://goepfert.de/', description: (
      <div className='descriptionBrand'>
        La calidad es el camino.<br />
        Durante más de siete décadas.
      </div>
    ), textDescription: 'Es un fabricante líder a nivel internacional y globalmente activo de máquinas para el procesamiento de cartón corrugado. Las máquinas Göpfert se caracterizan por su excelente calidad, robustez, larga vida útil y características de diseño innovadoras.' },
    { name: 'Corrpal Systems', logo: '../../brands/CorrpalSystems.png', web: 'https://corrpal.com/maschinen/', description: 'Calidad hecha en Suecia', textDescription: 'La compañía ha estado diseñando y produciendo principalmente paletizadores y interruptores desde 1995, 100% "Hecho en Suecia".' },
    { name: 'Bahmüller', logo: '../../brands/bahmuller.png', web: 'https://www.bahmueller.de/en-de/index.html', description: 'Invierte en éxito', textDescription: 'Bahmüller lleva ofreciendo soluciones innovadoras más de 70 años en todo el mundo en tres sectores diferentes: maquinaria para el cartón ondulado, maquinaria de rectificado de precisión y portaherramientas de precisión.' },
    { name: 'BGM Flexo Folder Gluer', logo: '../../brands/bgm.jpg', web: 'https://www.bahmueller.de/en-us/corrugated-board-converting/products/bgm-flexo-folder-gluer.html', description: 
    (
      <div className='descriptionBrand'>
        Dos socios confiables: <br />
        BGM Bahmüller y Göpfert Maschinen
      </div>
    ),
    textDescription: 'La Alianza Franconia-Suabia garantiza para sistemas en línea la impresión multicolor en una calidad convincente y excelentes resultados incluso en cartón corrugado de servicio pesado. Desde 1982, las máquinas BGM han sido utilizadas en todo el mundo por reconocidos fabricantes y marcas.' },
    { name: 'JB Machinery', logo: '../../brands/jbm.png', web: 'https://www.jbmachinery.com/', description: '', textDescription: 'JB Machinery ofrece productos y servicios de alta calidad a empresas de conversión y fabricantes de equipos originales. Con más de 60 años de experiencia en la industria, nuestros diseños únicos y eficientes de sistemas de secado por infrarrojos y curado por rayos ultravioleta han generado una extensa lista de clientes satisfechos de todo el mundo.' },
    { name: 'Vistron', logo: '../../brands/Vistron1.png', web: 'https://vistron.com/', description: '', textDescription: '' },
    { name: 'Stock Maschinenbau', logo: '../../brands/StockM.png', web: 'http://www.stock-maschinenbau.de/', description: '', textDescription: 'Stock Maschinenbau desarrolla y fabrica máquinas para la producción económica de envases y materiales publicitarios. Desde su fundación en 1970,  se ha convertido en uno de los principales fabricantes y especialistas mundiales en máquinas laminadoras.' },
    { name: 'Minda', logo: '../../brands/Minda.png', web: 'https://www.minda.com/en/', description: 'Intralogística. Plantas. Transporte.', textDescription: 'Para los sectores intralogística, construcción de plantas y tecnología de transportador, le ofrecemos soluciones individuales para diferentes industrias. Conocimiento y creatividad, confiabilidad y flexibilidad: estas características son la base de nuestro trabajo.' },
    { name: 'Absolute', logo: '../../brands/Absolute.png', web: 'https://absolute-eng.com/', description: 'Pensar. Desafío. Innovar.', textDescription: 'Primer fabricante de cámaras en fibra de carbono con sistema de rasqueta para la industria flexográfica. Como especialistas en sistemas de dosificación de tinta y rodillos anilox, Absolute y Pamarco han estado trabajando en la industria de la flexografía durante décadas.' },
  ];

  useEffect(()=> {
    if (brand ==='Gopfert') {
      setGopfert(true);
    } else {
      setGopfert(false);
    }
  }, [brand]);

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
        let descriptionBrand = '';
        let textDescriptionBrand = '';
        
        switch (brand) {
          // brands in the database
          case 'Gopfert':
            brandToRender = <h3>{dataBranding[0].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[0].logo} alt={dataBranding[0].name} />
            webBrand = dataBranding[0].web;
            descriptionBrand = dataBranding[0].description;
            textDescriptionBrand = dataBranding[0].textDescription;
            // setGopfert(true)
            break;
          case 'Bahmuller':
            brandToRender = <h3>{dataBranding[2].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[2].logo} alt={dataBranding[2].name} />
            webBrand = dataBranding[2].web;
            descriptionBrand = dataBranding[2].description;
            textDescriptionBrand = dataBranding[2].textDescription;
            break;
          case 'BGM':
            brandToRender = <h3>{dataBranding[3].name}</h3>;
            logoBrandToRender = <img className='brandingLogo toBig' src={dataBranding[3].logo} alt={dataBranding[3].name} />
            webBrand = dataBranding[3].web;
            descriptionBrand = dataBranding[3].description;
            textDescriptionBrand = dataBranding[3].textDescription;
            break;
          case 'JBMachinery':
            brandToRender = <h3>{dataBranding[4].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[4].logo} alt={dataBranding[4].name} />
            webBrand = dataBranding[4].web;
            descriptionBrand = dataBranding[4].description;
            textDescriptionBrand = dataBranding[4].textDescription;
            break;
          case 'StockMaschinenbau':
            brandToRender = <h3>{dataBranding[6].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[6].logo} alt={dataBranding[6].name} />
            webBrand = dataBranding[6].web;
            descriptionBrand = dataBranding[6].description;
            textDescriptionBrand = dataBranding[6].textDescription;
            break;
          case 'Absolute':
            brandToRender = <h3>{dataBranding[8].name}</h3>;
            logoBrandToRender = <img className='brandingLogo' src={dataBranding[8].logo} alt={dataBranding[8].name} />
            webBrand = dataBranding[8].web;
            descriptionBrand = dataBranding[8].description;
            textDescriptionBrand = dataBranding[8].textDescription;
          break;

          default:
          brandToRender = <h3>{brand}</h3>
        }

        return (
          <div key={i}>
            <div className='divBrandingLogo'>
              
              <a href={webBrand} target="_blank">
                {logoBrandToRender}
              </a>
              
            </div>
            
            <div className='descriptionContainer'>
              <p className='descriptionBrand'>{descriptionBrand}</p>
              <p className='textDescriptionBrand'>{textDescriptionBrand}</p>
            </div>

            {/* categorys */}
            {Array.isArray(machines) ? (
              <div style={{ marginLeft: '10%' }}>
                {machines.map((e, index) => (
                  <button
                    key={index}
                    className={`brandsModel ${selected === e ? 'brandsModelActive' : ''}`}
                    onClick={() => setSelected(e)}
                  >
                    {e}
                  </button>
                ))}
              </div>
            ) : (
              <h3 className='brandsModel'>Todos los modelos</h3>
            )}


            <div className='brandsContainer'>
              <Swiper
                className='swiperBrands'
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1.7,
                    spaceBetween: 5,
                  },
                  767: {
                    slidesPerView: 2,
                    spaceBetween: 5,
                  },
                  1024: {
                    slidesPerView: 2.3,
                    spaceBetween: 5,
                  },
                  1280: {
                    slidesPerView: 2.6,
                    spaceBetween: 10,
                  },
                  1536: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1700: {
                    slidesPerView: 3.3,
                  }
                }}
              >
                {valuesExceptLast
                  .filter((e) => selected === 'Todos los modelos' || (gopfert && selected === e.divisor))
                  .map((e, i) => (
                    <SwiperSlide key={i} className='swiperSlide'>
                      <div onClick={show}>
                        <Item dataItem={e} />
                      </div>
                    </SwiperSlide>
                  ))
                }

              </Swiper>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Brands;