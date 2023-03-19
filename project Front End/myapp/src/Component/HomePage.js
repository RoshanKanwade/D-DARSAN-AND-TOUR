
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';
import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function HomePage() {
var state={
        "hotels":[
           {
              "id":"1",
              "Hotel":"2",
              "image":"https://example.com/images/hotel-a.jpg"
           },
           {
              "id":"1",
              "Hotel":"3",
              "image":"https://example.com/images/hotel-b.jpg"
           },
           {
              "id":"3",
              "name":"",
              "image":"https://example.com/images/hotel-c.jpg"
           }
        ]
     }
    const navigate=useNavigate();
    
   
    function FindHotel(event){
       
        navigate("/HotelDetails");
       
    }
    
    return (
        <div>
            
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./pic1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Form className="d-flex" >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./pic2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                     src="./pic3.jpg"
                       alt="Third slide"
                    />

                    <Carousel.Caption>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel><div>
                <tr>
    <td>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./vittal.jpg" />
      <Card.Body>
        <Card.Title>vitthal-Rukmini Temple</Card.Title>
        <Card.Text>
        he Vithoba Temple, officially known as Shri Vitthal-Rukmini Mandir is a Hindu temple in Pandharpur, in the Indian state of Maharashtra.
        Location: Pandharpur, Solapur, Maharashtra 
          Deity: Vithoba alias Vitthala
       State: Maharashtra
       District: Solapur
        </Card.Text>
        <Button variant="primary" onClick={()=>FindHotel("1")}>Show</Button>
      </Card.Body>
    </Card>

    </td>
    <td> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./karnataka.jpg" />
      <Card.Body>
        <Card.Title>Chamundeshwari temple</Card.Title>
        <Card.Text>
        Some temples of Dakshina Kannada have the practice of not allowing ordinary clothing
         to be worn inside. People can drape a cloth over, or wear a Dhoti. 
         This practice is especially found in the temples in Dakshina Kannada
        </Card.Text>
        <Button variant="primary">Show</Button>
      </Card.Body>
    </Card></td>
    <td><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./padma.jpg" />
      <Card.Body>
        <Card.Title>Padmanabhaswamy Temple</Card.Title>
        <Card.Text>
        The Shree Padmanabhaswamy Temple is a Hindu temple located in Thiruvananthapuram, the capital of the state of Kerala, India. The name of the city of 'Thiruvananthapuram' in Malayalam and Tamil translates to "The City of Lord Ananta
        </Card.Text>
        <Button variant="primary">Show</Button>
      </Card.Body>
    </Card></td>
    <td><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./Tungnath_temple.jpg" />
      <Card.Body>
        <Card.Title>Tungnath Temple</Card.Title>
        <Card.Text>
        
        Tungnath (IAST:tuņgnāth) is one of the highest Shiva temples in the world and is the highest of the five Panch Kedar temples located in the Rudraprayag district, in the Indian state of Uttarakhand. The Tungnath (literal meaning: Lord of the peaks) mountains form the Mandakini and Alaknanda river valleys.
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card></td>
    </tr>
    <hr>
    </hr>
    <tr>
    <td><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./padma.jpg" />
      <Card.Body>
        <Card.Title>Bihar</Card.Title>
        <Card.Text>
        Some temples of Dakshina Kannada have the practice of not allowing ordinary 
        clothing to be worn inside. People can drape a cloth over, or wear a Dhoti.
         This practice is especially found in the temples in Dakshina Kannada
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card></td> 

    <td><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./pic4.jpg" />
      <Card.Body>
        <Card.Title>Arunachal</Card.Title>
        <Card.Text>
        Some temples of Dakshina Kannada have the practice of not allowing
         ordinary clothing to be worn inside. People can drape a cloth over, 
         or wear a Dhoti. This practice is especially found in the temples in Dakshina Kannada
        </Card.Text>
        <Button variant="primary">Book</Button>
      </Card.Body>
    </Card></td> 
    <td><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./karnataka.jpg" />
      <Card.Body>
        <Card.Title>Gujarat</Card.Title>
        <Card.Text>
        Some temples of Dakshina Kannada have the practice of not allowing ordinary 
        clothing to be worn inside. People can drape a cloth over, or wear a Dhoti.
         This practice is especially found in the temples in Dakshina Kannada
        </Card.Text>
        <Button variant="primary"  >Book</Button>
      </Card.Body>
    </Card></td> 
    </tr>
    </div>
    </div>
    );






}
export default HomePage;
