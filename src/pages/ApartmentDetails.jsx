import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "../styles/ApartmentDetails.css";
import ModalEdit from "../components/ModalEdit";
import editSvg from "../assets/pencil-simple-line.svg";
import deleteSvg from "../assets/trash.svg";
import ModalDelete from "../components/ModalDelete";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import placeholderImg from "../assets/placeholder-img.png";

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
          <Container id="apartment-details-container">
            <Row id="apartment-details">
              <Col>
                <Card style={{}} className="column-style">
                  {apartmentDetails.pictureURL ? (
                    <Card.Img
                      className="apartment-img"
                      src={apartmentDetails.pictureURL}
                    />
                  ) : (
                    <Card.Img className="apartment-img" src={placeholderImg} />
                  )}
                </Card>
              </Col>

              <Col>
                <Card className="column-style details-column">
                  <Card.Body>
                    <Card.Title id="card-title">
                      {apartmentDetails.title}
                    </Card.Title>
                    <Card.Text className="card-text">
                      {apartmentDetails.address}
                    </Card.Text>
                    <hr />
                    {apartmentDetails.book === true ? (
                      <Card.Title className="book-available">
                        Booking is Available
                      </Card.Title>
                    ) : (
                      <Card.Title className="book-available">
                        Booking is Not Available
                      </Card.Title>
                    )}
                    <Card.Text id="rating">
                      &#9733;{apartmentDetails.rating}
                    </Card.Text>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>{apartmentDetails.description}</Card.Text>
                    <Card.Title>Guests</Card.Title>
                    <Card.Text>{apartmentDetails.numOfGuest} Beds</Card.Text>
                    <Card.Title>Price per Night</Card.Title>
                    <Card.Text>{apartmentDetails.pricePerNight} €</Card.Text>

                    <Link
                      className="card-btn"
                      to={`/apartment-list/${apartmentDetails.cityId}`}
                    >
                      Go Back
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>

          <ModalEdit
            show={show}
            setShow={setShow}
            onHide={handleClose}
            apartmentDetails={apartmentDetails}
            updateDetails={fetchData}
            fetchedData={fetchedData}
            setApartments={setApartments}
          />
        </>
      )}

      <button className="edit-float" onClick={handleShow}>
        <img src={editSvg} />
      </button>
      <button className="delete-float" onClick={handleShowDelete}>
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
