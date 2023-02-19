import { BaseUrl } from "./http"
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
function Product(product) {
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

  return (

    <div className="products-container">
      <Card className="product-card">
      <Card.Img variant="top" src={BaseUrl+'/static'+product.product.image} alt={product.name} />
      <Card.Body className="d-flex" style={{ textAlign: "center" }}>
        <Card.Title style={{textAlign:"center"}}>
          {product.product.name}</Card.Title>
     
  
        <Button variant="mt-auto" onClick={handleAddProduct}>
  add to cart {product.product.price}$
</Button>

      </Card.Body>
      
    </Card>
        
        
    </div>
  )
}

export default Product
