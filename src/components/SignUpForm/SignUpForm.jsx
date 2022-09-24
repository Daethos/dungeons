import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";

function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: '',
    passwordError: false
  });
  
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    bio: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  // initialized the react router hook, which allows you to programatically
  // change routes, aka after our signup call in the handleSubmit
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault(); // this stop the browser from submitting the form!

    if (!isPasswordMatch(state.password, state.passwordConf)) return setError({message: 'Passwords Must Match!', passwordError: true});
    setError({message: '', passwordError: false})
    // Create formData, so we can send over our file, using multipart/formdata header
    // which sends over the basic inputs, and then the file

    const formData = new FormData(); //< - this constructor from the browser allows us to create data
    // now we can set key value pairs on the formData
    formData.append("photo", selectedFile);
    // Line by line tactic
    // formData.append('username', state.username);
    // formData.append('email', state.email);
    // and so on for the rest or our state

    // A more robust way to generate the rest of the formData is using a loop!
    // loop over our state object using a for ... in loop
    for (let key in state) {
      formData.append(key, state[key]);
    }

    console.log(
      formData,
      " <- form Data, you cant see this!",
      "you have to loop over it"
    );
    console.log(
      formData.forEach((item) => console.log(item)),
      " < This lets you see the key values in formData"
    );

    try {
      await userService.signup(formData); // THIS IS WHERE WE ARE MAKING A REQUEST TO THE SERVER, the response is handled inside function .thens, go at the look at the function
      // After the line above,
      // the new token is in localstorage,
      // so now we can update state
      props.handleSignUpOrLogin(); // <- call the function from the app component
      // that gets the token from localstorage, and sets in our App's state

      // navigate whereever after the user has logged in
      navigate("/"); // this accepts a route you defined in your App.js
    } catch (err) {
      // the error comes from the throw statement in the signup functions
      // .then
      console.log(err);
      setError({message: err.message, passwordError: false});
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }
  const disable = state.password !== state.passwordConf;
  return (
    <div id="signup" className="border border-black bg-black text-white">
        <div className="form-container">
        <img src={process.env.PUBLIC_URL + '/images/ancient-silver-dragon.jpg'} alt="ancient-black-dragon" id="monster-image" />
        <h2>Sign Up</h2>
        
      <Form onSubmit={handleSubmit}>
      {/* <form autoComplete="off" onSubmit={handleSubmit}> */}
      <Form.Group className="my-2" controlId="formBasicUsername">
      <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="username"
            value={state.username}
            onChange={handleChange}
            required
          />
          </Form.Group>
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
          <Form.Group className="my-2" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            name="passwordConf"
            type="password"
            placeholder="Confirm Password"
            value={state.passwordConf}
            onChange={handleChange}
            required
          />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicUser">
          <Form.Label>Your Bio Here!</Form.Label>
          <Form.Control
            type="textarea"
            label="bio"
            name="bio"
            placeholder="Tell us more about yourself..."
            value={state.bio}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group className="my-2" controlId="formBasicPhoto">
          <Form.Label>Profile Picture!</Form.Label>
            <Form.Control
              type="file"
              name="photoUrl"
              placeholder="upload image"
              onChange={handleFileInput}
            />
          </Form.Group>
          <Button type="submit" variant="success" disabled={disable} className="btn btn-lg">
            SIGN UP
          </Button>
      {/* </form> */}
      </Form>
    </div>
    <p className="error-message">&nbsp;{state.error}</p>
  </div>
  );
}
