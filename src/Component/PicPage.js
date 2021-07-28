import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import pic1 from "../media/pic1.jpg";
import pic2 from "../media/pic2.jpg";
import pic3 from "../media/pic3.jpg";

const PicPage = () => {
  return (
    <>
      <Container className="p-3" style={{ background: "#cfe2ff" }}>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              style={{ resizeMode: "contain", height: 500, width: 350 }}
              src={pic1}
            />
            <Card.Body>
              <Card.Title>Pic 1</Card.Title>

              <Card.Text>User: {}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Like </Button>{" "}
              <Button variant="warning">Dislike </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ resizeMode: "contain", height: 500, width: 350 }}
              src={pic2}
            />
            <Card.Body>
              <Card.Title>Pic 2</Card.Title>

              <Card.Text>User: {}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Like </Button>{" "}
              <Button variant="warning">Dislike </Button>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              style={{ resizeMode: "contain", height: 500, width: 350 }}
              src={pic3}
            />
            <Card.Body>
              <Card.Title>Pic 3</Card.Title>

              <Card.Text>User: {}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="info">Like </Button>{" "}
              <Button variant="warning">Dislike </Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default PicPage;
