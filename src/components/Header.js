import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
    <Link to='/'>Home</Link>
    <br/>
    <Link to='/cart'>Cart</Link>
    </div>

  )
}

export default Header