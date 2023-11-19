import { Link } from "react-router-dom"

function Navbar() {
  return (
  <nav className="navBarStyle">
    <div className="nav1">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">About</Link>
        </li>
        <li>
          <Link to="#">Contact us</Link>
        </li>
      </ul>
    </div>
    <div className="nav2">
    <button class="btn btn-outline-light" type="submit">Add Apartment</button>
    </div>
  </nav>
  )
}

export default Navbar
