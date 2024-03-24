import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Card = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.card.items);
    console.log(cartItems)
    const removeProduct = (index) => {
        console.log("Removing product at index:", index);

    };

    const incrementQuantity = (index) => {

    };

    const decrementQuantity = (index) => {
      
    };

    return (
        <div className="w-75 m-auto">
        <h1>Cart</h1>
        <table className="w-100">
          <thead>
            <tr className="border-bottom">
              <th style={{ width: '15%' }}></th>
              <th style={{ width: '15%', textAlign: 'center' }}>Image</th>
              <th style={{ width: '25%', textAlign: 'center' }}>Description</th>
              <th style={{ width: '15%', textAlign: 'center' }}>Quantity</th>
              <th style={{ width: '15%', textAlign: 'center' }}>Remove</th>
              <th style={{ width: '15%', textAlign: 'center' }}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems !== undefined && cartItems.map((item, index) => (
              <tr className="border-bottom" key={index}>
                <td style={{ width: '15%' }}>
                  <div className="img-container">
                    <div className="img-prdct">
                      <img src={item.product.thumbnail} alt={item.title} style={{ width: '100px', height: '100px' }} />
                    </div>
                  </div>
                </td>
                <td style={{ width: '25%', textAlign: 'center' }}>{item.product.title}</td>
                <td style={{ width: '25%' }}>{item.product.description}</td>
                <td style={{ width: '15%', textAlign: 'center' }}>
                  <div className="d-flex justify-content-center align-items-center button-container">
                    <button className="quantity-btn" onClick={() => decrementQuantity(index)} style={{ backgroundColor: '#1E90FF', color: '#fff' }}>-</button>
                    <input type="text" className="quantity-input" value={item.quantity} readOnly />
                    <button className="quantity-btn" onClick={() => incrementQuantity(index)} style={{ backgroundColor: '#1E90FF', color: '#fff' }}>+</button>
                  </div>
                </td>
                <td style={{ width: '15%', textAlign: 'center' }}>
                  <button className="rmvbtn rounded small" onClick={() => removeProduct(index)}>X</button>
                </td>
                <td style={{ width: '15%', textAlign: 'center' }}>{item.product.price}$</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-25 me-0 container total-container">
          <div className="row">
            <div className="col">Total</div>
            <div className="col">
              {/* Calculate and display total price */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;