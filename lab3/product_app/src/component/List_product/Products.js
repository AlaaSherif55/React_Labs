import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../reusableComponent/productCard/ProductCard';
import './Products.css'
import { useDispatch} from 'react-redux'
import { incrementCounter} from '../../store/slice/counter';
import { addItemToCard } from '../../store/slice/cardSlice';
import { axiosInstance } from '../../apis/config';
const Products = () => {

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(incrementCounter());
    dispatch(addItemToCard(product));
  };

  function renderContent(product,addToCart){
    return  <div className="col-md-3" key={product.id}>
    <div className="card" style={{ width: '18rem', marginBottom: '20px', position: 'relative' }}>
      <button
        style={{
          position: 'absolute',
          top: '0',
          left: '3%',
          top: '2%',
          color: '#fff',
          backgroundColor: product.stock !== 0 ? 'green' : 'rgb(185, 38, 38)',
          borderRadius: '15px',
          border: 'none',
        }}
      >
        {product.stock !== 0 ? 'In stock' : 'Out of stock'}
      </button>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} className="card-img-top" style={{ width: '285px', height: '200px' }} alt="..." />
      </Link>
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="card-title">{product.title}</h6>
          <span>{product.price}</span>
        </div>
        <h6>{product.description}</h6>
        <div className="star-rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <a className="btn btn-primary w-50 custom-rounded-btn" href="#" role="button" onClick={()=> addToCart({product})}>
          Add To Cart
        </a>
      </div>
    </div>
  </div>
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
     
    axiosInstance
    .get(`/products`)
    .then((res) => {
      setProducts(res.data.products)
    })
    .catch((err) => console.log(err));
  
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product,index) => (
          <ProductCard key={`product-${index}`} renderContent= {renderContent} product={product} addToCard={addToCart}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;