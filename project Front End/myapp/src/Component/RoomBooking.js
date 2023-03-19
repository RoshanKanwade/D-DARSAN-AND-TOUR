import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const RoomBooking = () => {
    const navigate=useNavigate();
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guests, setGuests] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    if(checkIn<new Date()){ 
        window.alert("Enter valid date")
        navigate("/HotelDetails");
    }else{
    const diffInTime = checkOut.getTime() - checkIn.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24);
    
    window.alert(sessionStorage.getItem("amount"));

const number1 = parseInt(sessionStorage.getItem("amount"));
window.alert(number1);
 var amount=diffInDays*number1*guests;
 window.alert(amount);
 if(amount<0){
    window.alert("Enter correct Date");
    navigate("/HotelDetails");
}else{
 sessionStorage.setItem("amount",""+amount)
    console.log(`Check-in Date: ${checkInDate}`);
    console.log(`Check-out Date: ${checkOutDate}`);
    console.log(`Guests: ${guests}`);
    sessionStorage.setItem("checkInDate",checkIn);
        sessionStorage.setItem("checkOutDate",checkOut);
        sessionStorage.setItem("Noroom",guests);
      
    navigate("/Payment")}
  }};

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <h1>Room Booking</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="checkInDate">
              <Form.Label>Check-in Date</Form.Label>
              <Form.Control
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="checkOutDate">
              <Form.Label>Check-out Date</Form.Label>
              <Form.Control
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="guests">
              <Form.Label>No of rooms</Form.Label>
              <Form.Control
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Make Payment
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RoomBooking;