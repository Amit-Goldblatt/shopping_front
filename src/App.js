import './App.css';
import { useEffect, useState } from "react";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import About from './components/About';
import HeroBanner from './components/HeroBanner';
import ProductDetails from './components/ProductDetails';
import { BaseUrl } from './components/http';




function App() {
    // get all products from the backend
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(BaseUrl)
        fetch(BaseUrl + "/product/")
            .then((response) => response.json())
            .then((data) => {

                setProducts(data)


            });

    }, [])
    // get the cart from the backend
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch(BaseUrl + "/cart/")
            .then((response) => response.json())
            .then((data) => {

                setCart(data)
            });

    }, [])

    return (
        <div className="App">


            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroBanner products={products} />
                            <Products products={products} />
                        </>
                    }
                    />
                    <Route path="/cart" element={
                        <Cart cart={cart} />} />

                    <Route path="/product/:id" element={

                        <ProductDetails products={products} />} />
                    <Route path="/about" element={
                        <About />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;