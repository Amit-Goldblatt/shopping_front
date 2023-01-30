import React from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from './http'
function FindProduct(id, products){
    if (products.products.length === 0) {
        return null;
    }
    else{
        return products.products.find(product => product.id === id);
    }
}

function ImgUrl(id, products){
    let product = FindProduct(id, products);
    if (product === null) {
        return BaseUrl + '/static/images/placeholder.png';
    }
    else{
        return BaseUrl + '/static' + product.image;
    }
}

function Description(id, products){
    let product = FindProduct(id, products);
    if (product === null) {
        return 'Loading...';
    }
    else{
        return product.description;
    }
}

function Name (id, products){
    let product = FindProduct(id, products);
    if (product === null) {
        return 'Loading...';
    }
    else{
        return product.name;
    }
}

function HeroBanner(products) {
   let ProductId = 9;

  return (
    
    <div className='hero-banner-container'>
        <div>
            <h3>Featured Product</h3>
            <h1>{Name(ProductId, products)}</h1>
            <img className='hero-banner-image' src={ImgUrl(ProductId, products)} alt='headphons'></img>
            
        </div>
        <div>
            <Link to = '/product/id'>
                <button type='button'>Shop Now</button>   
            </Link>
            <div className='desc'>
                <h5>description</h5>
                <p>{Description(ProductId, products)}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner