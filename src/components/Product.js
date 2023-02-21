import { BaseUrl } from "./http"
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

// a card that shows the product image, name and price
function Product(product) {

  // handleAddProduct is called when the user clicks on the add to cart button
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
        <Link to={"/product/" + product.product.id}>
          <Card.Img variant="top" src={BaseUrl + '/static' + product.product.image} alt={product.name} />
        </Link>
        <Card.Body className="d-flex" style={{ textAlign: "center" }}>
          <Card.Title style={{ textAlign: "center" }}>
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
