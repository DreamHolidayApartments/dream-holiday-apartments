import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentList.css";
import placeholderImg from "../assets/placeholder-img.png";

function ApartmentList({ apartments }) {
  const { cityId } = useParams();
  const [apartmentsInCity, setApartmentsInCity] = useState(null);

  useEffect(() => {
    if (apartments) {
      const newApartmentsArr = apartments.filter((apartment) => {
        return apartment.cityId == cityId;
      });
      setApartmentsInCity(newApartmentsArr.reverse());
    }
  }, [apartments]);

  return (
    <div id="ApartmentList">
      <div className="filter">
        <button id="filter-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="rgb(56, 55, 55)"
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
                {apartment.book === true ? (
                  <img
                    className="card-img-top"
                    src={
                      apartment.pictureURL
                        ? `${apartment.pictureURL}`
                        : placeholderImg
                    }
                    alt="Photo of Apartment"
                  />
                ) : (
                  <>
                    <img
                      className="card-img-top opacity-25"
                      src={
                        apartment.pictureURL
                          ? `${apartment.pictureURL}`
                          : placeholderImg
                      }
                      alt="Photo of Apartment"
                    />
                    <p id="not-available">Not Available</p>
                  </>
                )}

                <div className="card-body">
                  <div className="card-head">
                    <h6 className="card-title">{apartment.title}</h6>
                    <p> &#9733;{apartment.rating} </p>
                  </div>
                  <p id="beds">&#183; {apartment.numOfGuest} beds &#183;</p>
                  <p id="short-description">
                    {apartment.description.slice(
                      0,
                      apartment.description.indexOf(".") + 1
                    )}
                  </p>

                  <p className="card-text" id="price">
                    {apartment.pricePerNight} € per Night
                  </p>
                  <Link
                    className="btn btn-primary check-it-out"
                    to={`/apartment/${apartment.id}`}
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
