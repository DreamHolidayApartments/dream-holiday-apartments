import { useState } from "react";
import "../styles/FilterApartments.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FilterApartments({ filterApartments, maxPrice }) {
  const [checkedRating, setCheckedRating] = useState(false);
  const [checkedPrice, setCheckedPrice] = useState(false);
  const [checkedGuests, setCheckedGuests] = useState(false);

  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(maxPrice);
  const [selectedGuests, setSelectedGuests] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedRating);
    filterApartments(selectedRating, selectedPrice, selectedGuests);
  };

  return (
    <div id="FilterApartments">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Minimun Rating"
                id="rating-box"
                onChange={() => setCheckedRating(true)}
              />
              {checkedRating && (
                <Form.Select
                  aria-label="Default select example"
                  style={{ width: "220px" }}
                  onChange={(e) => setSelectedRating(e.target.value)}
                >
                  <option>Select Minimum Rating</option>
                  <option value="1">&#9733;</option>
                  <option value="2">&#9733;&#9733;</option>
                  <option value="3">&#9733;&#9733;&#9733;</option>
                  <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
                  <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
                </Form.Select>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Maximum Price"
                id="price-box"
                onChange={() => setCheckedPrice(true)}
              />

              {checkedPrice && (
                <Form.Control
                  type="number"
                  placeholder="Enter Maximum Price"
                  autoFocus
                  style={{ width: "220px" }}
                  value={selectedPrice}
                  onChange={(e) => {
                    setSelectedPrice(e.target.value);
                  }}
                />
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Check
                type="checkbox"
                label="Minimum Guests"
                id="guest-box"
                onChange={() => setCheckedGuests(true)}
              />

              {checkedGuests && (
                <Form.Control
                  type="number"
                  placeholder="Enter Minimum Guests"
                  autoFocus
                  style={{ width: "220px" }}
                  value={selectedGuests}
                  max={50}
                  onChange={(e) => {
                    setSelectedGuests(e.target.value);
                  }}
                />
              )}
            </Form.Group>
          </Col>
          <Col>
            <Button type="submit">Filter</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FilterApartments;
