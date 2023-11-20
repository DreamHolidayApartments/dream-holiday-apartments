import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ApartmentDetails.css";

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
    <div id="ApartmentDetails">
      {apartmentDetails && (
        <div>
          <h1>{apartmentDetails.title}</h1>
          <img src={apartmentDetails.pictureURL} id="apartment-img"></img>
          <div className="details-container">
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
