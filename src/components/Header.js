import { Link } from "react-router-dom";
import '../App.css'
function Header() {
  return (
    <div className="products-heading">
    <h2>best selling products</h2>
    <Link to='/'>Home</Link>
    <br/>
    <Link to='/cart'>Cart</Link>
    </div>

  )
}

export default Header