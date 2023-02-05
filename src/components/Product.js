import { BaseUrl } from "./http"
import Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
function Product(product) {
  return (

    <div>
      <Card style={{ width: '18rem' , height:'30rem' }}>
      <Card.Img variant="top" src={BaseUrl+'/static'+product.product.image} alt={product.name} />
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title style={{textAlign:"center"}}>
          {product.product.name}</Card.Title>
        {/* <Card.Text>
        {product.product.description}
        <br></br>
        </Card.Text> */}
  
        <Button variant="secondary" style={{ position: "absolute", right:"25%", bottom:"0" }}>
  add to cart {product.product.price}$
</Button>

      </Card.Body>
    </Card>
        
        
    </div>
  )
}

export default Product
