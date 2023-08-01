import "./SignUp.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formerrors, setError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [SignupSuccess, setSignupSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(validate());
    setisSubmit(true);

    if (Object.keys(formerrors).length === 0 && isSubmit === true) {
      ValidationSuccess();
    }
  };

  const ValidationSuccess = async () => {
    // e.preventDefault();
    // setError(validate());
    // setisSubmit(true);
    // console.log(isSubmit);
    console.log(formerrors);
    try {
      const response = await axios.post("https://fakestoreapi.com/users", {
        username,
        email,
        password,
      });
      onSignup(response.data);
      setSignupSuccess(true);
      console.log(response.data); // You can handle the response data as per your requirement
    } catch (error) {
      console.error(error.response);
    }

    // Clear the form fields after submission
    setUsername("");
    setEmail("");
    setPassword("");
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!username) {
      errors.username = "Username is required!";
      console.log("username not given");
    }
    if (!email) {
      errors.email = "Email is required!";
      console.log("email not given");
    } else if (emailRegex.test(email) === false) {
      errors.email = "Email format not correct.";
    }

    if (!password) {
      errors.password = "Password is Required!";
      console.log("password not given");
    } else if (password.length < 4) {
      errors.password = "Password should be greater than 4 characters.";
      console.log("password < 4");
    }
    // console.log(errors);
    return errors;
  };

  return (
    <div className="login-container">
      <h2>Sign-up</h2>
      <form>
        {" "}
        {/*onSubmitHandler */}
        {/* <h2>Sign-in</h2> */}
        {/* {isloading && <div><h3 className="loading">LOADING...</h3></div>} */}
        <div className="form-group">
          <label>Enter Username: </label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{formerrors.username}</p>
        </div>
        <div className="form-group">
          <label>Enter Email: </label>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{formerrors.email}</p>
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
          <p style={{ color: "red" }}>{formerrors.password}</p>
        </div>
        {SignupSuccess ? (
          <h4 style={{ color: "yellow", alignSelf: "center" }}>
            Sign-up Successful <br />
            (now you can log in)
          </h4>
        ) : (
          <></>
        )}
        <button onClick={handleSubmit} className="login-button">
          Sign-up
        </button>
        <button onClick={() => navigate("/signin")} className="login-button">
          Sign-in <br />
          (already have an account)
        </button>
      </form>
    </div>
  );
};

export default SignUp;
