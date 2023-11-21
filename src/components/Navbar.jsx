import { Link } from "react-router-dom"
import img1 from "../assets/logo.png"
import { useState } from "react"
import ModalAdd from "./ModalAdd";


function Navbar({ fetchedCountries, fetchedCities, fetchedData, setApartments }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(fetchedCountries)
  return (
  <nav className="navBarStyle">
    <div className="nav1">
      <ul>
      <li>
          <Link to="/">
            <img src={img1} alt="" style={{'width' : '4rem', 'height': '4rem'}}/>
          </Link>
        </li>
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
    <button className="btn btn-outline-light" onClick={handleShow}>Add Apartment</button>
    <ModalAdd show= {show} setShow = {setShow} onHide ={handleClose} cities={fetchedCities} countries={fetchedCountries} fetchedData = {fetchedData} setApartments={setApartments}/>
    </div>
  </nav>
  )
}

export default Navbar
