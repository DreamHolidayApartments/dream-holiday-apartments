import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import ApartmentList from "./pages/ApartmentList";
import Navbar from "./components/Navbar";
import axios from "axios";

function App() {
  const location = useLocation();
  let url = import.meta.env.VITE_API_URL;
  const [countries, setCountries] = useState(null);
  const [cities, setCities] = useState(null);

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
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <div className="App">

      {location.pathname !== "/" && cities && countries && <Navbar fetchedCountries={countries} fetchedCities={cities} />}

      <Routes>
        (cities && countries && 
        <Route
          path="/"
          element={
            <HomePage fetchedCountries={countries} fetchedCities={cities} />
          }
        />
        <Route path="/apartmentList/:cityId" element={<ApartmentList />} />
        )
      </Routes>
        
    </div>
  );
}

export default App;
