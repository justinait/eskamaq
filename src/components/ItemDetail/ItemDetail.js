import React, { useState } from 'react'
import './ItemDetail.css'
import Carousel from 'react-bootstrap/Carousel';
import { Swiper, SwiperSlide } from 'swiper/react';

function ItemDetail({dataItem, category, allItems}) {
  
  let objectLength = dataItem && Object.keys(dataItem).length;
  let array=[];
  for(let i=1; i<objectLength; i++){
    array = [...array, i];
  }

  const [selectedItem, setSelectedItem] = useState(dataItem);
  const {image, name, machine, description, dataName, technicalData} = selectedItem;
  
  const handleClick = (e) => {
    setSelectedItem(e)
  }

  return (
    <div>
      <div className=''>
        <Swiper
          className='modalSwiper'
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3.7,
              spaceBetween: 3,
            },
          }}
        >
        {allItems
          .filter((e) => category === 'Todos los modelos' || (category === e.divisor))
          .map((e, i) => (
            <SwiperSlide key={i} className='swiperSlide'>
              <p onClick={()=> handleClick(e)} className={`modalCategorys ${e.name == selectedItem.name ? 'modalCategorysActive' : ''}`}>{e.name}</p>
                
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>

      <div className='itemDetailContainer'>  

        <div className='detailImageContainer'>
          {Array.isArray(image) && (
            <Carousel interval={null}>
              {image.map((e, i)=> {
                return (
                  <Carousel.Item>
                    <img src={e} alt={name} className='detailImage' key={i}/>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          )}
        </div>

        <div className='textContainer'>

          <div className='detailText'>
            <h3> {name} </h3>
            <p className='detailMachine'>{machine}</p>

            <p className='detailDescription'>
              {description}
            </p>
          </div>

          <div className='detailDataContainer'>
            
            <p className='dataTitle'>Datos técnicos</p>
            <p className='dataSubtitle'>{dataName ? dataName : name}</p>

            {technicalData && Object.keys(technicalData).map((key, index) => (
              <div key={index} className='dataTableRow'>
                <p>{key}</p>
                <p>{technicalData[key]}</p>
              </div>
            ))}

          </div>

        </div>

      </div>  

    </div>
    
  )
}

export default ItemDetail