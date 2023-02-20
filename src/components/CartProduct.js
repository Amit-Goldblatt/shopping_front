
import { useState } from 'react';
import { BaseUrl } from "./http";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CartProduct({ cartproduct, onRemoveProduct }) {
  const [quantity, setQuantity] = useState(cartproduct.quantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      axios.put(BaseUrl + '/cart/' + cartproduct.product.id + "/", {
        product: cartproduct.product.id,
        quantity: quantity - 1,
      })
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
    axios.put(BaseUrl + '/cart/' + cartproduct.product.id + "/", {
      product: cartproduct.product.id,
      quantity: quantity + 1,
    })
  };

  const handleRemoveProduct = () => {
    axios.delete(BaseUrl + '/cart/' + cartproduct.id + "/")
      .then(() => {
        onRemoveProduct(cartproduct.product.id);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="cart-product">
      <Link to={"/product/" + cartproduct.product.id}>
      <img src={BaseUrl + '/static' + cartproduct.product.image} alt={cartproduct.product.name} />
      </Link>
      <div className="cart-product-details">
        <h1>{cartproduct.product.name}</h1>
        <p>{cartproduct.product.price}$</p>
        <div className="quantity">
          <Button className="quantity-button" onClick={handleDecrease}>-</Button>
          <h3 style={{ marginLeft: "6px" }}>{quantity}</h3>
          <Button className="quantity-button" onClick={handleIncrease}>+</Button>
        </div>
        <br />
        <Button className="remove-button" onClick={handleRemoveProduct}>Remove</Button>
      </div>
    </div>
  );
}

export default CartProduct;
