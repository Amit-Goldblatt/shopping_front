import CartProduct from "./CartProduct";
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from "react-bootstrap";
function Cart({ cart }) {
    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      setCartItems(cart);
    }, [cart]);
  
    const handleRemoveProduct = (productId) => {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.product.id !== productId
      );
      setCartItems(updatedCartItems);
    };
  
    return (
      <div className="cart-card-container">
        <h1 style = {{textAlign:"center"}}>Cart</h1>
        {cartItems.map((cartproduct) => (
          <CartProduct
            key={cartproduct.id}
            cartproduct={cartproduct}
            onRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
    );
  }
  
  export default Cart;
  