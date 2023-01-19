import { useEffect, useState } from "react";
import Products from "./components/Products";
import{BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
function App() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/product/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)
            });
       
    }, [])
	const [cart, setCart] = useState([])
	useEffect(() => {
        fetch("http://localhost:8000/cart/")
            .then((response) => response.json())
            .then((data) => {
                
                setCart(data)
            });
        
    }, [])

  return (
    <div className="App">
        <h1>My Cart Front end</h1>

		<BrowserRouter>
			<Header></Header>
			<Routes>
				<Route path="/" element={ 
        			<Products products={products}/>} />
				<Route path="/cart" element={
					<Cart cart={cart}/>} />
				
			</Routes>
		</BrowserRouter>

    </div>
  );
}

export default App;