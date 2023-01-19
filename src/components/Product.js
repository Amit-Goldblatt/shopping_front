function Product(product) {
  return (

    <div>
        <h1>{product.product.name}</h1>
        <p>{product.product.description}</p>
        <p>{product.product.price}</p>
        <img src={'http://127.0.0.1:8000/static'+product.product.image} alt={product.name}/>
    </div>
  )
}

export default Product
