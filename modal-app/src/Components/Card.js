import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BasicExample() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s1.png"/>
            <Card.Body>
              <Card.Title>Visual Design</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s2.png" />
            <Card.Body>
              <Card.Title>Development</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s3.png" />
            <Card.Body>
              <Card.Title>QA Testing</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s4.png" />
            <Card.Body>
              <Card.Title>IT Management</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s5.png" />
            <Card.Body>
              <Card.Title>Cyber Security</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "18rem" }} className="text-center pt-3">
            <Card.Img variant="top" src="card/s6.png" />
            <Card.Body>
              <Card.Title>Wireless Connectivity</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BasicExample;
