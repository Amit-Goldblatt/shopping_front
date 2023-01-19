import { useEffect, useState } from "react";

function CartProduct(cartproduct) {
    const [cartdes, setCartdes] = useState([])
    
	useEffect(() => {

        fetch("http://localhost:8000/product/"+cartproduct.cartproduct.product+"/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setCartdes(data)
               
            });
        
    }, [])
  return  (
       <div>
<h1>{cartdes}</h1>
  <p>{cartdes.price}</p>
  <p>{cartproduct.cartproduct.quantity}</p>
  {/* <img src={'http://127.0.0.1:8000/static'+product.product.image} alt={product.name}/> */}
</div>
)
}

export default CartProduct