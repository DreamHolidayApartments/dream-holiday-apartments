import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentDetails.css";
import ModalEdit from "../components/ModalEdit";
import editSvg from "../assets/pencil-simple-line.svg";
import deleteSvg from "../assets/trash.svg";
import ModalDelete from "../components/ModalDelete";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ApartmentDetails({ fetchedData, setApartments }) {
  const [showDelete, setShowDelete] = useState(false);
  const [show, setShow] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const url = import.meta.env.VITE_API_URL;
  const { apartmentId } = useParams();
  const [apartmentDetails, setApartmentDetails] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    axios
      .get(`${url}/apartments/${apartmentId}`)
      .then((res) => {
        setApartmentDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {apartmentDetails && (
        <>
        <Container style={{ width: "100rem",margin:"0 auto" }}>
          <Row style={{ margin:"40px 0" }}>

            <Col>
              <Card style={{ width: "40rem", height: "40rem" }}>
                <Card.Img style={{ width: "40rem", height: "50rem" }}  src={apartmentDetails.pictureURL} />
              </Card>
            </Col>

            <Col>
              <Card style={{ width: "30rem", height: "40rem", backgroundColor: "aliceblue" }}>
                <Card.Body >
                  <Card.Title style={{ fontSize: "40px" }}>{apartmentDetails.title}</Card.Title>
                  <Card.Text className="cardText">
                  {apartmentDetails.address}
                  </Card.Text>
                  <hr/>
                  <Card.Text style={{ fontSize: "20px" , textAlign: "end"}} >
                  &#9733;{apartmentDetails.rating}
                  </Card.Text>
                  <Card.Title>Description</Card.Title>
                  <Card.Text>
                  {apartmentDetails.description}
                  </Card.Text>
                  <Card.Title>Guests</Card.Title>
                  <Card.Text>
                  {apartmentDetails.numOfGuest} Beds
                  </Card.Text>
                  <Card.Title>Price per Night</Card.Title>
                  <Card.Text>
                  {apartmentDetails.pricePerNight} €
                  </Card.Text>
                  <Link className="cardBtn">Go Back</Link>
                 
                </Card.Body>
              </Card>
            </Col>

          </Row>
</Container>
          {/* <div id="ApartmentDetails">
            <div className="apt1">
              <h1>{apartmentDetails.title}</h1>
              <img src={apartmentDetails.pictureURL} id="apartment-img"></img>
            </div>

            <div className="details-container">
              <h1>Apartment Details</h1>
              <p>{apartmentDetails.numOfGuest} beds</p>
              <p>&#9733;{apartmentDetails.rating}</p>
              <p>{apartmentDetails.address}</p>
              <p>{apartmentDetails.description}</p>
            </div>
          </div> */}

          <ModalEdit
            show={show}
            setShow={setShow}
            onHide={handleClose}
            apartmentDetails={apartmentDetails}
            updateDetails={fetchData}
          />
        </>
      )}

      <button className="editFloat" onClick={handleShow}>
        <img src={editSvg} />
      </button>
      <button className="deleteFloat" onClick={handleShowDelete}>
        <img src={deleteSvg} />
      </button>

      {apartmentDetails && (
        <ModalDelete
          showDelete={showDelete}
          onHide={handleCloseDelete}
          id={apartmentId}
          cityId={apartmentDetails.cityId}
          fetchedData={fetchedData}
          setApartments={setApartments}
        />
      )}
    </div>
  );
}

export default ApartmentDetails;
