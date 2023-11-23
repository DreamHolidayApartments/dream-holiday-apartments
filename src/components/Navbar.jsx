import { Link } from "react-router-dom";
import img1 from "../assets/logo.png";
import { useState } from "react";
import ModalAdd from "./ModalAdd";
import "../styles/Navbar.css";

function Navbar({
  fetchedCountries,
  fetchedCities,
  fetchedData,
  setApartments,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className=" Navbar">
      <div className="nav1">
        <ul>
          <li>
            <Link to="/">
              <img
                src={img1}
                alt=""
                style={{
                  width: "4rem",
                  height: "4rem",
                }}
              />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="#">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="nav2">
        <button className="btn btn-outline-light add-btn" onClick={handleShow}>
          Add Apartment
        </button>
        <ModalAdd
          show={show}
          setShow={setShow}
          onHide={handleClose}
          cities={fetchedCities}
          countries={fetchedCountries}
          fetchedData={fetchedData}
          setApartments={setApartments}
        />
      </div>
    </nav>
  );
}

export default Navbar;
