import { BaseUrl } from "./http"


function CartProduct(cartproduct) {

  return  (
       <div>
  <h1>{cartproduct.cartproduct.product.name}</h1>
  <p>{cartproduct.cartproduct.product.description}</p>
  <p>{cartproduct.cartproduct.product.price}</p>
  <p>{cartproduct.cartproduct.quantity}</p>

{/* <h1>{cartproduct.cartproduct}</h1> */}
  {/* <p>{cartdes.price}</p>
  <p>{cartproduct.cartproduct.quantity}</p> */}
  <img src={BaseUrl+'/static'+cartproduct.cartproduct.product.image} alt={cartproduct.cartproduct.product.name}/>
</div>
)
}

export default CartProduct
