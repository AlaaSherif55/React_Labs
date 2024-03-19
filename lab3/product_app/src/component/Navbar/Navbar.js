import React from 'react'
import { Link } from 'react-router-dom';
import Products from '../List_product/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
  return (
   <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <Link className="navbar-brand" to="/home">Production App</Link>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li class="nav-item">
                <Link className="nav-link" to="/card">
                     <FontAwesomeIcon icon="shopping-cart" />
                </Link>
                </li>
            </ul>
        </div>
    </div>
   </nav>
   </>
  )
}
