import CartProduct from "./CartProduct"


function Cart({cart}) {
    
    return (
        <div>
            
            {cart.map(cartproduct => <CartProduct key={cartproduct.id} cartproduct={cartproduct} />)}

        </div>
    )
}

export default Cart