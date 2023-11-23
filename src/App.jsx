import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ApartmentList from "./pages/ApartmentList";
import Navbar from "./components/Navbar";
import ApartmentDetails from "./pages/ApartmentDetails";
import About from "./pages/About";
import axios from "axios";

function App() {
  let url = import.meta.env.VITE_API_URL;
  const location = useLocation();
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [apartments, setApartments] = useState(null);

  const fetchData = (param, setFun) => {
    axios
      .get(`${url}/${param}`)
      .then((res) => {
        setFun(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData("countries", setCountries);
    fetchData("cities", setCities);
    fetchData("apartments", setApartments);
  }, []);

  useEffect(() => {}, [cities]);

  return (
    <div className="App">
      {location.pathname !== "/" && cities && countries && (
        <Navbar
          fetchedCountries={countries}
          fetchedCities={cities}
          fetchedData={fetchData}
          setApartments={setApartments}
        />
      )}

      <Routes>
        (cities && countries &&
        <Route
          path="/"
          element={
            <HomePage
              fetchedCountries={countries}
              fetchedCities={cities}
              selectedCity={selectedCity}
              setSelectedCity={setSelectedCity}
            />
          }
        />
        )
        <Route
          path="/apartment-list/:cityId"
          element={<ApartmentList apartments={apartments} />}
        />
        <Route
          path="/apartment/:apartmentId"
          element={
            <ApartmentDetails
              fetchedData={fetchData}
              setApartments={setApartments}
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
