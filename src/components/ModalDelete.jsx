import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function ModalDelete({showDelete,setShowDelete,onHide,id, cityId, fetchedData,setApartments}) {

    const url = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();
    
    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`${url}/apartments/${id}`)
        .then( response => {
            fetchedData("apartments", setApartments);
            navigate(`/apartment-list/${cityId}`);
        })
        .catch((error) => {
            console.log("Error deleting apartment...");
            console.log(error);
        })
        setShowDelete(false);
    }

  return (
    <Modal centered show={showDelete} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Apartment</Modal.Title>
      </Modal.Header>

      <Modal.Body>
       <h5>Are you sure you want to peremenently remove this Apartment ?</h5>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="danger" onClick={handleDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDelete
