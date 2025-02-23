import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function Signup() {
  return (
    <Container className="mt-5">
      <h2 className="text-center">Create an Account</h2>
      <Form className="p-4 shadow-sm bg-light rounded">
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Create password" />
        </Form.Group>

        <Button variant="success" type="submit" className="w-100">
          Sign Up
        </Button>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login here</Link>
        </p>
      </Form>
    </Container>
  );
}

export default Signup;
