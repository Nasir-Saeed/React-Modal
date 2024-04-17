import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
import React from 'react';
import Modal from "./Modal";


function UncontrolledExample() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home-bg-n.jpg"
          alt="First slide"
          text="Awesome App For Your Modern Lifestyle"
        />
        <Carousel.Caption>
          <h1>
            Awesome App For Your Modern Lifestyle
            <br/>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home-bg-2.jpg"
          alt="First slide"
          text="Digital Agency & Marketing"
        />
        <Carousel.Caption>
          <h1>Digital Agency & Marketing
          <br/>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home-bg-3.jpg"
          alt="First slide"
          text="Make Real-Life Connections With IT"
        />
        <Carousel.Caption>
          <h1>Make Real-Life Connections With IT
          <br/>
            <Button variant="success" onClick={() => setModalShow(true)}>
              Contact Us
            </Button>
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
