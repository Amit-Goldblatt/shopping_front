import { BaseUrl } from "./http"
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Product(product) {
  return (

    <div className="products-container">
      <Card className="product-card">
      <Card.Img variant="top" src={BaseUrl+'/static'+product.product.image} alt={product.name} />
      <Card.Body className="d-flex" style={{ textAlign: "center" }}>
        <Card.Title style={{textAlign:"center"}}>
          {product.product.name}</Card.Title>
     
  
        <Button variant="mt-auto">
  add to cart {product.product.price}$
</Button>

      </Card.Body>
      
    </Card>
        
        
    </div>
  )
}

export default Product
