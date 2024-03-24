import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {decrementCounter,incrementCounter, decreaceCounterByValue}from '../../store/slice/counter';
import {reduceQuantityForItem,icrementQuantityForItem,removeItemFromCard}from '../../store/slice/cardSlice';
import {}from '../../store/slice/cardSlice';
const Card = () => {
    const [totalPrice, settotalPrice] = useState(0);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.card.items);
    useEffect(()=>{
      let sum;
      console.log(cartItems)
      if(cartItems){
        sum=0
          cartItems.forEach(item => {
            sum += item.product.price*item.quantity;
          });
          settotalPrice(sum)
      }
    },[cartItems])

    const removeProduct = (product) => {
        dispatch(removeItemFromCard(product.id))
        const foundItem = cartItems.find(item => item.product.id === product.id);
        dispatch(decreaceCounterByValue(foundItem.quantity))
    };

    const incrementQuantity = (product) => {
      console.log(`here ${product.title}`)
      dispatch(icrementQuantityForItem(product.id))
      dispatch(incrementCounter())
    };

    const decrementQuantity = (product) => {
      dispatch(reduceQuantityForItem(product.id))
      dispatch(decrementCounter())
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
                    <button className="quantity-btn" onClick={() => decrementQuantity(item.product)} style={{ backgroundColor: '#1E90FF', color: '#fff' }}>-</button>
                    <input type="text" className="quantity-input" value={item.quantity} readOnly />
                    <button className="quantity-btn" onClick={() => incrementQuantity(item.product)} style={{ backgroundColor: '#1E90FF', color: '#fff' }}>+</button>
                  </div>
                </td>
                <td style={{ width: '15%', textAlign: 'center' }}>
                  <button className="rmvbtn rounded small" onClick={() => removeProduct(item.product)}>X</button>
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
              {totalPrice}$
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;