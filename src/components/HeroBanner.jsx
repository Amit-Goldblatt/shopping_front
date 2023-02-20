import React from 'react'
import { Link } from 'react-router-dom'
import { BaseUrl } from './http'
import Button from 'react-bootstrap/Button';
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

// function Description(id, products){
//     let product = FindProduct(id, products);
//     if (product === null) {
//         return 'Loading...';
//     }
//     else{
//         return product.description;
//     }
// }

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
    

    <div style={{ display: "table", width:"100%"}} className='hero-banner-container'>
        
            <h3>Featured Product</h3>
            <h1 >{Name(ProductId, products)}</h1>

            <div >
            <img className='hero-banner-image' src={ImgUrl(ProductId, products)} alt='headphons'></img>
            
            </div>
            <Link to = {"/product/"+ProductId}  >
            <Button variant="primary">buy now</Button>{' '}
        </Link>
       
       
       
    </div>

    
  )
}

export default HeroBanner