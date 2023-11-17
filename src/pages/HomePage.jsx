import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  let url = import.meta.env.VITE_API_URL;
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);
  const [filteredCities, setFilteredCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  const getCountriesData = () => {
    axios
      .get(`${url}/countries`)
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCitiesData = () => {
    axios
      .get(`${url}/cities`)
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterCities = (id) => {
    let newList = cities.filter((city) => city.countryId == id);
    setFilteredCities(newList);
  };

  useEffect(() => {
    getCountriesData();
    getCitiesData();
  }, []);

  const handleSelectCountry = (e) => {
    filterCities(e.target.value);
    console.log(e.target.value);
  };



  return (
    <div>
      <h1>Home Page</h1>

      <label>
        Select Countries
        <select
          className="custom-select"
          id="inputGroupSelect01"
          onChange={handleSelectCountry}
        >
          <option>Choose Country</option>
          {countries &&
            countries.map((country) => {
              return <option value={country.id} key={country.id}>{country.name}</option>;
            })}
        </select>
      </label>

      <label>
        Select Cities
        <select
          className="custom-select"
          id="inputGroupSelect02"
          onChange={(e)=>{setSelectedCity(e.target.value)}}
        >
          <option>Choose City</option>
          {filteredCities &&
            filteredCities.map((city) => {
              return <option value={city.id} key={city.id}>{city.name}</option>;
            })}
        </select>
      </label>
      {
        selectedCity && (<Link to = {`/apartmentList/${selectedCity}`}>Submit</Link>)
      }
      

    </div>
  );
}

export default HomePage;
