import React from 'react'
import './CategorysModal.css'

function CategorysModal() {
  return (
    <div>
        <div className='modalSwiper'>
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
              {/* <div onClick={()=> handleClick(e)}> */}
                
                <p className='modalCategorys'>{e.name}</p>
              {/* </div> */}
            </SwiperSlide>
          ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default CategorysModal