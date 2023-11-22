import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ModalEdit({
  show,
  setShow,
  onHide,
  apartmentDetails,
  updateDetails,
  fetchedData,
  setApartments,
}) {
  const url = import.meta.env.VITE_API_URL;
  const [title, setTitle] = useState(apartmentDetails.title);
  const [picURL, setPicURL] = useState(apartmentDetails.pictureURL);
  const [address, setAddress] = useState(apartmentDetails.address);
  const [price, setPrice] = useState(apartmentDetails.pricePerNight);
  const [numOfGuest, setNumOfGuest] = useState(apartmentDetails.numOfGuest);
  const [book, setBook] = useState(apartmentDetails.book);
  const [description, setDescription] = useState(apartmentDetails.description);
  const [rating, setRating] = useState(apartmentDetails.rating);
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
      cityId: apartmentDetails.cityId,
      pictureURL: picURL,
      address: address,
      numOfGuest: numOfGuest,
      book: book,
      description: description,
      rating: rating,
    };

    axios
      .put(`${url}apartments/${apartmentDetails.id}`, requestBody)
      .then((response) => {
        updateDetails();
        fetchedData("apartments", setApartments);
      })
      .catch((error) => {
        console.log("Error adding project in the API...");
        console.log(error);
      });

    setShow(false);
  };

  return (
    <Modal size="lg" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Apartment</Modal.Title>
      </Modal.Header>
      <Form validated={validated} onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                autoFocus
                required
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Label>Picture URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Picture URL"
                autoFocus
                value={picURL}
                onChange={(e) => {
                  setPicURL(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                autoFocus
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Price Per Night</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price Per Night"
                autoFocus
                required
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
              <Form.Label>Guest Capacity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Guest Capacity"
                autoFocus
                required
                value={numOfGuest}
                onChange={(e) => {
                  setNumOfGuest(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Booking is Available"
                checked={book}
                onChange={() => {
                  setBook(!book);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
              <Form.Label>Description</Form.Label>
              <Form.Control
                maxLength={400}
                as="textarea"
                placeholder="Enter Description"
                autoFocus
                required
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>

          <Button className="btnAdd" variant="primary" type="submit">
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalEdit;
