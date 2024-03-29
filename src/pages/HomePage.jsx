import "../styles/HomePage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage({
  fetchedCountries,
  fetchedCities,
  selectedCity,
  setSelectedCity,
}) {
  const [filteredCities, setFilteredCities] = useState(null);

  const filterCities = (id) => {
    let newList = fetchedCities.filter((city) => city.countryId == id);
    setFilteredCities(newList);
  };

  const handleSelectCountry = (e) => {
    filterCities(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="HomePage">
      <div className="select-container">
        <label>
          <select
            className="custom-select"
            id="input-group-select-01"
            onChange={handleSelectCountry}
          >
            <option>Select Country</option>
            {fetchedCountries &&
              fetchedCountries.map((country) => {
                return (
                  <option value={country.id} key={country.id}>
                    {country.name}
                  </option>
                );
              })}
          </select>
        </label>

        <label>
          <select
            className="custom-select"
            id="input-group-select-02"
            onChange={(e) => {
              setSelectedCity(e.target.value);
            }}
          >
            <option>Select City</option>
            {filteredCities &&
              filteredCities.map((city) => {
                return (
                  <option value={city.id} key={city.id}>
                    {city.name}
                  </option>
                );
              })}
          </select>
        </label>
        {selectedCity && (
          <Link id="btn-submit1" to={`/apartment-list/${selectedCity}`}>
            Submit
          </Link>
        )}
      </div>
    </div>
  );
}

export default HomePage;
