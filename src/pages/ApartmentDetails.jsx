import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ApartmentDetails.css";
import ModalEdit from "../components/ModalEdit";

function ApartmentDetails() {
  const url = import.meta.env.VITE_API_URL;
  const { apartmentId } = useParams();
  const [apartmentDetails, setApartmentDetails] = useState(null);

  const fetchData = () => {
    axios
      .get(`${url}/apartments/${apartmentId}`)
      .then((res) => {
        setApartmentDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {apartmentDetails && (
        <div id="ApartmentDetails">
          <div className="apt1">
            <h1>{apartmentDetails.title}</h1>
            <img src={apartmentDetails.pictureURL} id="apartment-img"></img>
          </div>

          <div className="details-container">
            <h1>Apartment Details</h1>
            <p>{apartmentDetails.numOfGuest} beds</p>
            <p>&#9733;{apartmentDetails.rating}</p>
            <p>{apartmentDetails.address}</p>
            <p>{apartmentDetails.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApartmentDetails;
