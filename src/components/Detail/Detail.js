import React from 'react';
import './Detail.css'; // Importa los estilos del Detail

function Detail({ isOpen, onCloseModal, valuesExceptLast, selectedItem }) {
  console.log(selectedItem);
  return (
    isOpen && (
      <div className="modal">
        <div className="modalContent">
          <span className="close" onClick={onCloseModal}>&times;</span>
          <h2>{selectedItem.name}</h2> 
          <p>{selectedItem.description}</p> 
          <p>{selectedItem.otraPropiedad}</p> 
        </div>
      </div>
    )
  );
}

export default Detail;
