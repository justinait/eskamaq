import React, { useEffect } from 'react';
import './Detail.css';

function Detail({ isModalOpen, onCloseModal, valuesExceptLast, selectedItem }) {
  console.log(selectedItem);
  
  useEffect(()=> {
    console.log('detail');
  }, [isModalOpen])

  return (
    isModalOpen ? (
      <div className="modal">
        <div className="modalContent">
          <span className="close" onClick={onCloseModal}>x</span>
          <h3>{selectedItem.name}</h3> 
          <p>{selectedItem.description}</p> 
          <p>{selectedItem.otraPropiedad}</p> 
        </div>
      </div>
    ): null
  );
}

export default Detail;
