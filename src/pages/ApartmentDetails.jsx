import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../styles/ApartmentDetails.css";
import ModalEdit from "../components/ModalEdit";
import editSvg from "../assets/pencil-simple-line.svg";
import deleteSvg from "../assets/trash.svg";
import ModalDelete from "../components/ModalDelete";

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
          <div id="ApartmentDetails">
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
          </div>

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
