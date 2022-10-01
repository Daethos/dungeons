import React, { useState } from "react";
import "./LoginForm.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const BUCKET_START = 'https://collectionbucketman.s3.amazonaws.com/dungeons/';
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      // Route to wherever you want!
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      // this is from the throw block in the userService.login first then function
      setError(err.message);
    }
  }
  return (
    <div className="text-black">
      <img src={BUCKET_START + 'tarrasque.png'} alt="Tarrasque" id="monster-image" />
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
        <Form.Group className="my-2" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          </Form.Group>
          <Button type="submit" variant="success" className="btn btn-lg">
            Login!
          </Button>
          </Form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}
