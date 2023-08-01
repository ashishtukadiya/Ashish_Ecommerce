import "./SignIn.css"
import axios from "axios";
// import {json, useNavigate} from 'react-router-dom'
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
// import LoadingScreen from "../LoadingScreen";
// import { toast } from "react-toastify";
// import LoginData from "./LoginData";

const SignIn = ({token, setToken}) => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        setError("")
        setPassword("")
        setUsername("")
        e.preventDefault();
    axios({
        url:'https://fakestoreapi.com/auth/login',
        method:'POST',
        data: {
            username: username,
            password: password,  
        },
    }).then(res => {
        console.log(res.data.token);
        // setToken(res.data.token);
        localStorage.setItem("userToken",res.data.token)
       
    }).catch(err => {
        console.log(err.response);
        setError(err.response.data)
    })
    }
    const [isloading, setIsLoading] = useState(false);
    const onloginclick = () =>{
        setIsLoading(true);
        setTimeout(onclicklogin,2000)
        // !local ? setTimeout(onclicklogin,2000) : onclicklogin()
        
    }
   
    const onclicklogin=()=>{ 
        const local = localStorage.getItem("userToken")


        !local ? (navigate("/signin")):(clicksuccess())
         

    }
    const clicksuccess =() =>{
        navigate("/home");
        window.location.reload();
    }

    
    return (
      <div className="login-container">
        <h2>Sign-in</h2>
        <form onSubmit={onSubmitHandler}> {/*onSubmitHandler */}
        {/* <h2>Sign-in</h2> */}
        {isloading && <div><h3 className="loading">LOADING...</h3></div>}
        {error && <p className="error-message">{error}</p>}
        
          <div className="form-group">
            <label>Username: (mor_2314),(johnd)</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label>Password: (83r5^_),(m38rmF$)</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>
          <button  onClick={onloginclick} className="login-button btn">Login</button>
          <button  onClick={()=>navigate("/signup")} className="login-button btn">Sign-Up</button>
        </form>
                
      </div>
    );
  };
  
  export default SignIn;