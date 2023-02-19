import CartProduct from "./CartProduct"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useEffect } from 'react';
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
        <h1>Cart</h1>
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
  