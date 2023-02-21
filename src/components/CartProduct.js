
import { useState } from 'react';
import { BaseUrl } from "./http";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//this component shows a single product in the cart 
function CartProduct({ cartproduct, onRemoveProduct }) {
  const [quantity, setQuantity] = useState(cartproduct.quantity);
  // hndleDecrease is called when the user clicks on the - button and decreases the quantity of the product
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      axios.put(BaseUrl + '/cart/' + cartproduct.product.id + "/", {
        product: cartproduct.product.id,
        quantity: quantity - 1,
      })
    }
  };
  // hndleIncrease is called when the user clicks on the + button and increases the quantity of the product
  const handleIncrease = () => {
    setQuantity(quantity + 1);
    axios.put(BaseUrl + '/cart/' + cartproduct.product.id + "/", {
      product: cartproduct.product.id,
      quantity: quantity + 1,
    })
  };
  // hndleRemoveProduct is called when the user clicks on the remove button and removes the product from the cart
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
