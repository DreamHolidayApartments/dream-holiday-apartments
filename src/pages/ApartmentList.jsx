import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentList.css";
import placeholderImg from "../assets/placeholder-img.png";

function ApartmentList({apartments}) {
  const url = import.meta.env.VITE_API_URL;
  const { cityId } = useParams();
  // const [allApartments, setAllApartments] = useState(null);
  const [apartmentsInCity, setApartmentsInCity] = useState(null);

  console.log("Apartments",apartments)
  // const fetchApartments = () => {
  //   axios
  //     .get(`${url}/apartments`)
  //     .then((res) => {
  //       setAllApartments(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // useEffect(() => {
  //   fetchApartments();
  // }, []);

  // wait for allApartments be filled with apartmentlist from fetching
  useEffect(() => {
    if (apartments) {
      const newApartmentsArr = apartments.filter((apartment) => {
        return apartment.cityId == cityId;
      });
      setApartmentsInCity(newApartmentsArr);
      console.log(apartmentsInCity);
    }
  }, [apartments]);

  return (
    <div id="ApartmentList">
      <div className="filter">
        <button id="filter-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"></path>
          </svg>
          Filter
        </button>
      </div>
      <div className="list-container">
        {apartmentsInCity &&
          apartmentsInCity.map((apartment) => {
            return (
              <div
                className="card"
                style={{ width: "18rem" }}
                key={apartment.id}
              >
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
                  <Link
                    className="btn btn-primary check-it-out"
                    to={`/cityname/${apartment.id}`}
                  >
                    Check it out
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ApartmentList;
