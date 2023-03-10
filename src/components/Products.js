
import Product from "./Product"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


// moves trough the array of products and renders each product
function Products({ products }) {
  return (


    <Container className="products-container" id="products">
      <Row>
        {products.map(product => (
          <Col xs={12} sm={12} md={2} lg={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default Products;
