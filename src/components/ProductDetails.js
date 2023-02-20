import React from 'react';
import { useParams } from 'react-router-dom';
import { BaseUrl } from './http';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const ProductDetails = ({ products }) => {
    const handleAddProduct = () => {
        axios.post(BaseUrl + '/cart/', {
          product: product.product.id,
          quantity: 1,
        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='Product-details'>
      <h2>{product.name}</h2>
        <img src={BaseUrl+'/static'+product.image} alt={product.name} />
      <p>{product.description}</p>
      
      <Button variant="mt-auto" onClick={handleAddProduct}>
  add to cart {product.price}$
</Button>
    </div>
  );
};

export default ProductDetails;
