import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentList.css";
import placeholderImg from "../assets/placeholder-img.png";
import funnel from "../assets/funnel.svg";
import FilterApartments from "../components/FilterApartments";

function ApartmentList({ apartments }) {
  const { cityId } = useParams();
  const [apartmentsInCity, setApartmentsInCity] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [displayFilter, setDisplayFilter] = useState(false);

  const filterApartments = (rating, price, guests) => {
    const filteredApartmentsArr = apartments
      .filter((apartment) => {
        return apartment.cityId == cityId;
      })
      .filter((apartment) => {
        return apartment.rating >= rating;
      })
      .filter((apartment) => {
        return apartment.pricePerNight <= price;
      })
      .filter((apartment) => {
        return apartment.numOfGuest >= guests;
      });
    setApartmentsInCity(filteredApartmentsArr);
  };

  const calcMaxPrice = () => {
    let maxPrice = 0;
    apartments.map((apartment) => {
      let price = apartment.pricePerNight;
      maxPrice = Math.max(maxPrice, price);
    });
    setMaxPrice(maxPrice);
  };

  useEffect(() => {
    if (apartments) {
      const newApartmentsArr = apartments.filter((apartment) => {
        calcMaxPrice();
        return apartment.cityId == cityId;
      });
      setApartmentsInCity(newApartmentsArr.reverse());
    }
  }, [apartments]);

  return (
    <div id="ApartmentList">
      <div className="filter">
        <button
          id="filter-btn"
          onClick={() => setDisplayFilter(!displayFilter)}
        >
          <img src={funnel} />
        </button>
        {displayFilter && maxPrice && (
          <FilterApartments
            filterApartments={filterApartments}
            maxPrice={maxPrice}
          />
        )}
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
                  <p id="beds">&#183; {apartment.numOfGuest} Guest &#183;</p>
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

        {apartmentsInCity.length === 0 && <h3>Sorry Nothing Available</h3>}
      </div>
    </div>
  );
}

export default ApartmentList;
