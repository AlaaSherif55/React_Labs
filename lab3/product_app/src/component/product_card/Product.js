import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import Navbar from '../Navbar/Navbar';
import { useDispatch} from 'react-redux'
import { addItemToCard } from '../../store/slice/cardSlice';
import {  incrementCounter } from '../../store/slice/counter';
import { axiosInstance } from '../../apis/config';

const Product = () => {

  const { productID } = useParams();
  const [product, setProduct] = useState(null);
  const [bigImgSrc, setBigImgSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    axiosInstance
    .get(`/products/${productID}`)
    .then((res) => {
     setProduct(res.data)
     setLoading(false)
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    
    });
    
  }, [productID ]);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(incrementCounter());
    dispatch(addItemToCard(product));
  };

  const showImg = (pic) => {
    setBigImgSrc(pic);
  };

  if (loading) {
    return <div class="loader"></div> ;
  }

  return (
   <>
    <div class="flex-box">
      <div class="left">
        <div class="big-img">
          <img src={product.thumbnail} alt="product" />
        </div>
        <div class="images">
          {product.images.map((image, index) => (
            <div class="small-img" key={index}>
              <img src={image} alt='' onClick={() => showImg(image)} />
            </div>
          ))}
        </div>
      </div>
      <div class="right">
        <div class="pname">{product.title}</div>
        <div class="url">{product.description}</div>
        <p>{product.rating}</p>
        <div class="price">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(product.price)}</div>
        <div class="btn-box">
          <button style={{ color: 'black', backgroundColor: product.stock !== 0 ? 'green' : 'rgb(185, 38, 38)', borderRadius: '15px' }}>{product.stock !== 0 ? 'In stock' : 'Out of stock'}</button>
        </div>
        <div class="btn-box">
          <p>More information:</p>
          <div class="quantity">
            <button class="btn-box1" style={{ color: 'black', marginLeft: '10px', borderRadius: '15px' }}>Category</button>
            <button class="btn-box1" style={{ color: 'black', marginLeft: '10px', borderRadius: '15px' }}>Brand</button>
          </div>
        </div>
        <div class="quantity">
          <p>Quantity :</p>
          <input type="number" min="1" max="5" defaultValue="1" />
        </div>
        <div class="btn-box">
        <a className="btn btn-primary w-50 custom-rounded-btn" href="#" role="button" onClick={()=> addToCart({product})}>
          Add To Cart
        </a>
          <button class="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
   </>
  );
};

export default Product;
