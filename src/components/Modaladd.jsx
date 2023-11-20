import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


function Modaladd({ show, onHide }) {
  
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Apartment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>


      <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                autoFocus
              />
     </Form.Group>
     <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price Per Night</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price Per Night"
                autoFocus
              />
     </Form.Group>
      </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Modaladd;
