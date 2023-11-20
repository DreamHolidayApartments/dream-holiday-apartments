import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentList.css";
import placeholderImg from "../assets/placeholder-img.png";

function ApartmentList() {
  const url = import.meta.env.VITE_API_URL;
  const { cityId } = useParams();
  const [allApartments, setAllApartments] = useState(null);
  const [apartmentsInCity, setApartmentsInCity] = useState(null);

  const fetchApartments = () => {
    axios
      .get(`${url}/apartments`)
      .then((res) => {
        setAllApartments(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchApartments();
  }, []);

  // wait for allApartments be filled with apartmentlist from fetching
  useEffect(() => {
    if (allApartments) {
      const newApartmentsArr = allApartments.filter((apartment) => {
        return apartment.cityId == cityId;
      });
      setApartmentsInCity(newApartmentsArr);
      console.log(apartmentsInCity);
    }
  }, [allApartments]);

  return (
    <div className="list-container">
      {apartmentsInCity &&
        apartmentsInCity.map((apartment) => {
          return (
            <div className="card" style={{ width: "18rem" }} key={apartment.id}>
              <img
                className="card-img-top"
                src={
                  apartment.pictureURL
                    ? `${apartment.pictureURL}`
                    : placeholderImg
                }
                alt="Photo of Apartment"
              />
              <div className="card-body">
                <div className="card-head">
                  <h5 className="card-title">{apartment.title}</h5>
                  <p> &#9733;{apartment.rating} </p>
                </div>
                <p id="beds">&#183; {apartment.numOfGuest} beds &#183;</p>
                <p>{apartment.description}</p>
                <p className="card-text">
                  {apartment.pricePerNight} € per Night
                </p>
                <Link className="btn btn-primary">Check it out</Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ApartmentList;
