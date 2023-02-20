import './App.css';
import { useEffect, useState } from "react";
import Products from "./components/Products";
import{BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Cart from "./components/Cart";
import About from './components/About';

// import { setSession } from 'next-auth-client';
import HeroBanner from './components/HeroBanner';
import FooterBanner from './components/FooterBanner';
import ProductDetails from './components/ProductDetails';
import { BaseUrl } from './components/http';


// function login(user, pass) {
//     axios.post(BaseUrl+'/login/', {
//         username: user,
//         password: pass,
//     })
//         .then(response => {
//             console.log(response.data);
//             setSession(response.data.session)
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }


function App() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log(BaseUrl)
        fetch(BaseUrl +"/product/")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setProducts(data)


            });
       
    }, [])
	const [cart, setCart] = useState([])
	useEffect(() => {
        fetch(BaseUrl+"/cart/")
            .then((response) => response.json())
            .then((data) => {
                
                setCart(data)
            });
        
    }, [])

  return (
    <div className="App">
        

		<BrowserRouter>
        <Header/>
			<Routes>
				<Route path="/" element={
                    <> 
                    <HeroBanner products={products}/>
        			<Products products={products}/>
                    </>
                    }
                     />
				<Route path="/cart" element={
					<Cart cart={cart}/>} />
                <Route path="/product/:id" element={
                    
                    <ProductDetails products={products}/>} />
                <Route path="/about" element={
                    <About/>}/>
			</Routes>
		</BrowserRouter>
        
    </div>
  );
}

export default App;