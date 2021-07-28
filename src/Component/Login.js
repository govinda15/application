import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Login = () => {
  return (
    <>
      <Container className="p-3" style={{ background: "#cfe2ff" }}>
        <Card>
          <Card.Header style={{ background: "#000", color: "#fff" }}>
            Please Login
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Id</Form.Label>
                <Form.Control type="text" placeholder="User ID" />
                <Form.Text className="text-muted">
                  We'll never share your user id with anyone else.
                </Form.Text>
              </Form.Group>

              <Button variant="success" type="submit">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};
export default Login;
