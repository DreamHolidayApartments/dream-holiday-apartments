import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ApartmentList from "./pages/ApartmentList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apartmentList/:cityId" element={<ApartmentList />} />
      </Routes>
    </div>
  );
}

export default App;
