
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';
import React, { useState } from 'react';
import Figure from 'react-bootstrap/Figure';
import Carousel from 'react-bootstrap/Carousel';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';

function HomePage() {

    
    return (
        <div>
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./tour.jpg"
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
                        src="./homeimg.jpg"
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
                     src="./tour1.jpg"
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
            <p><img src="./homeimg.jpg" alt="Smiley face" width={400} height={300} style={{verticalAlign: 'middle', margin: '0px 0px'}} />
            TTemples are a symbol of peace and belief for Hindus. The temple's main deity is the sculpture of a God or Goddess. Indian temples are known for their intricate sculptures, carvings and ancient paintings. These temples are open to the public and visitors who come to worship and make offerings</p>
            </div><br>
            </br><div>
            <p><img src="./tour1.jpg" alt="Smiley face" width={400} height={300} style={{verticalAlign: 'middle', margin: '0px 0px'}} />
            TTemples are a symbol of peace and belief for Hindus. The temple's main deity is the sculpture of a God or Goddess. Indian temples are known for their intricate sculptures, carvings and ancient paintings. These temples are open to the public and visitors who come to worship and make offerings</p>
            </div><br>
             </br><div>
             <p><img src="./home.jpg" alt="Smiley face" width={400} height={300} style={{verticalAlign: 'middle', margin: '0px 0px'}} />
            TTemples are a symbol of peace and belief for Hindus. The temple's main deity is the sculpture of a God or Goddess. Indian temples are known for their intricate sculptures, carvings and ancient paintings. These temples are open to the public and visitors who come to worship and make offerings</p>
            </div><br>
             </br><div>
             <p><img src="./tour.jpg" alt="Smiley face" width={400} height={300} style={{verticalAlign: 'middle', margin: '0px 0px'}} />
            Temples are a symbol of peace and belief for Hindus. The temple's main deity is the sculpture of a God or Goddess. Indian temples are known for their intricate sculptures, carvings and ancient paintings. These temples are open to the public and visitors who come to worship and make offerings</p>
            </div>
             </div>
    
    );






}
export default HomePage;
