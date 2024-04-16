import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="home-bg.jpg"
          alt="First slide"
          text="Awesome App For Your Modern Lifestyle"
        />
        <Carousel.Caption>
          <h1>Awesome App For Your Modern Lifestyle</h1>
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
          <h1>Digital Agency & Marketing</h1>
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
          <h1>Make Real-Life Connections With IT</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
