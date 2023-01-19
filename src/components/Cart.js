import CartProduct from "./CartProduct"

function Cart({cart}) {
    
    return (
        <div>
            
            {cart.map(cartproduct => <CartProduct key={cart[0]["id"]} cartproduct={cartproduct} />)}

        </div>
    )
}

export default Cart