import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";


function ModalAdd({ show,setShow,onHide, cities, countries, fetchedData, setApartments }) {

  let url = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [filteredCities, setFilteredCities] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [title,setTitle] = useState("");
  const [picURL, setPicURL] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [numofGuest, setNumOfGuest] = useState(0);
  const [book,setBook] = useState(false);
  const [description, setDescription] = useState("");
  const [validated, setValidated] = useState(false);

 
  const handleSubmit = (e) => {
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    
    e.preventDefault();
    const requestBody = {
      title: title,
      pricePerNight: price,
      cityId: parseInt(selectedCity),
      pictureURL: picURL,
      address: address,
      numOfGuest: numofGuest,
      book: book,
      description: description,
      rating: 0,
    };

    axios
      .post(`${url}/apartments`, requestBody)
      .then((response) => {
        fetchedData("apartments", setApartments);
        navigate(`/apartment-list/${selectedCity}`);
      })
      .catch((error) => {
        console.log("Error creating project in the API...");
        console.log(error);
      });

    setShow(false);
  };

  const filterCities = (id) => {
    let newList = cities.filter((city) => city.countryId == id);
    setFilteredCities(newList);
  };

  const handleSelectCountry = (e) => {
    filterCities(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Modal size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Apartment</Modal.Title>
      </Modal.Header>
      <Form validated={validated} onSubmit={handleSubmit}>
      <Modal.Body>
        
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Select
              aria-label="Default select example"
              onChange={handleSelectCountry}
            >
              <option>Select Country</option>
              {countries &&
                countries.map((country) => {
                  return (
                    <option value={country.id} key={country.id}>
                      {country.name}
                    </option>
                  );
                })}
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Select
              aria-label="Default select example"
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
            </Form.Select>
          </Form.Group>

          {selectedCity && (
            <Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  required 
                  type="text" 
                  placeholder="Enter Title" 
                  autoFocus value={title} 
                  onChange={(e)=>{setTitle(e.target.value)}} />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Picture URL</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Picture URL"
                  autoFocus
                  value={picURL}
                  onChange={(e)=>{setPicURL(e.target.value)}}
                />
          
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Address"
                  autoFocus
                  value={address}
                  onChange={(e)=>{setAddress(e.target.value)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Label>Price Per Night</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Price Per Night"
                  autoFocus
                  value={price}
                  onChange={(e)=>{setPrice(e.target.value)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Label>Guest Capacity</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Guest Capacity"
                  autoFocus
                  value={numofGuest}
                  onChange={(e)=>{setNumOfGuest(e.target.value)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput7"
              >
                <Form.Check // prettier-ignore
                  
                  type="switch"
                  id="custom-switch"
                  label="Booking is Available"
                  checked = {book}
                  onChange = {()=>{setBook(!book)}}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput8"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Enter Description"
                  autoFocus
                  value={description}
                  onChange={(e)=>{setDescription(e.target.value)}}
                />
              </Form.Group>
            </Form.Group>
          )}
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        {selectedCity && (
          <Button className="btnAdd" variant="primary" type="submit">
            Add Apartment
          </Button>
        )}
      </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalAdd;
