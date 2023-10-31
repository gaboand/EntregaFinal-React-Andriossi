import React from 'react';
import './CartItem.css';

const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div className="CartItem">
      
        {item.img && (
          <img src={`../../img/${item.img}`} alt={item.name} className="CartItem-image" />
        )}
          <h3 className="CartItem-name">{item.name}</h3>
          <p className="CartItem-price">${item.precio}</p>
        

        <p>Cantidad: {quantity}</p>
        <button onClick={() => removeItem(item.id)} className="CartItem-remove">
          Quitar
        </button>
    
    </div>
  );
};

export default CartItem;
